import { useEffect, useState } from 'react';

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
function AnotherButton() {
  return (
    <button>I'm another button</button>
  );
}

export default function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Could not reach the backend'));
  }, []);

  return (
    <>
    <div>
      <h1>Hello World!!</h1>
      <p>{message}</p>
      <MyButton />
    </div>
    <div>
      <h1>Another Button!</h1>
      <AnotherButton />
    </div>
    </>
    );

}
