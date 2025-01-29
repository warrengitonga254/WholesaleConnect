import express from 'express';
const app = express();
const port = 4000; // Ensure this port matches the one you are testing
console.log('Starting the server...'); // Log when server starts

app.get('/', (req, res) => {
  res.send('Hello, WholesaleConnect!');
  console.log('Received a request to /'); // Log when a request is received
});

app.listen(port, (err) => {
  if (err) {
    console.error('Failed to start server:', err); // Log any error during server start
    return;
  }
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;