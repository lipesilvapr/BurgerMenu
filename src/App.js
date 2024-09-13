import { useState } from 'react';
import './App.css';


function App() {
  const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };
  return (
    <div className="App">
      <header className="header">
        <h1>StockFlow</h1>
        <nav className='nav'>
          <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
            <li className='nav-item'>
              <a href='#inicio'>Inicio</a>
            </li>
            <li className='nav-item'>
              <a href='#clinica'>Clinica</a>
            </li>
            <li className='nav-item'>
              <a href='#farmacia'>Farmacia</a>
            </li>
            <li className='nav-item'>
              <a href='#duvidas'>Dúvidas</a>
            </li>
          </ul>
          <div className={`burger ${isActive ? 'active' : ''}`} onClick={handleToggle}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </nav>
      </header>
      <div className={`bg ${isActive ? 'active' : ''}`} onClick={handleToggle}>
      </div>
    </div>
  );
}

export default App;
