import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId = null;

    if (isOpen) {
      intervalId = setInterval(() => {
        setCounter(prevCount => prevCount + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isOpen]);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="button-container">
      <button className="button" onClick={handleButtonClick}>
        Open Modal
      </button>
      {isOpen && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div className="modal">
            <p>{counter}</p>
          </div>
        </div>
      )}
    </div>
  );

}

export default App;
