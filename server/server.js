import 'dotenv/config';
import 'babel-polyfill';
import app from './app';

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));
