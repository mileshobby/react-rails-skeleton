import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app';

const Root = ({store}) => (
  <Provider store={store} id="root">
    <HashRouter >
      <div>
        <App />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
