import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game.js';
import * as serviceWorker from './serviceWorker';

let age = 32;
//the props object is automatically created when data is passed as attributes
ReactDOM.render(<Game />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
