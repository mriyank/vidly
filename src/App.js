import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import "./App.css";
import Movies from './components/movies.jsx';
import Customers from './components/customers.jsx';
import Rentals from './components/rentals.jsx';
import NotFound from './components/notFound.jsx';

function App() {
  return (
    <main className="container">
      <Route path="/movies" component={Movies}></Route>
      <Route path="/customers" component={Customers}></Route>
      <Route path="/rentals" component={Rentals}></Route>
      <Route path="/not-found" component={NotFound}></Route>
    </main>
  );
}

export default App;
