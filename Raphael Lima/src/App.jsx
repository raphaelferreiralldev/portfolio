import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Botão que fica fixo no topo direito */}
      <button className="open-menu-btn" onClick={() => setIsOpen(true)}>
        ☰ Menu
      </button>

      {/* Camada escura que aparece ao abrir o menu */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}

      {/* Barra lateral (Sidebar) */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
        </div>
        
        <nav className="menu-links">
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </nav>
      </aside>

      {/* Conteúdo da sua página */}
      <main className="main-content">
        <h1>Conteúdo Principal</h1>
        <p>O botão de menu está lá no topo direito!</p>
      </main>
    </div>
  );
}

export default App;