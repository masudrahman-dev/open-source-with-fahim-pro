// App.js
import React, { useState } from 'react';
import Modal from './components/Modal/Modal';


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal with Text</button>
      <button onClick={() => setIsModalOpen(false)}>Close Modal</button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Hello, I am a Modal!</h2>
        <p>This is an example of a reusable modal component.</p>
      </Modal>
    </div>
  );
};

export default App;
