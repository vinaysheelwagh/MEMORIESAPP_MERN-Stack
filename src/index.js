import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers';

const postStore = createStore(reducers,compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={postStore}>
    <App/>
  </Provider>,
  document.getElementById('root')
);


