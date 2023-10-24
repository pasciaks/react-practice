
import './App.css';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import MyComponent from './components';
import AlertDismissibleExample from './components/AlertDismissable';

function App() {
  return (
    <div className="App">
      <h2>Welcome</h2>
      <Button>Ok</Button>
      <MyComponent />
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>;
      <AlertDismissibleExample />
    </div>
  );
}

export default App;
