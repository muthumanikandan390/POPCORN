import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react"
import './index.css';
import App from './App';

import StarRating from './StarRating';

function Test(){

  const [movieRating , setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color='blue' maxRating={10} onSetRating={setMovieRating}/>
      <p> this movie was rated {movieRating} stars</p>
    </div>

  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating = {5} messages = {['terrible' , 'bad' , 'okay' , 'good' , 'excellent']} defaultRating = {3}/>
    <Test /> */}

  </React.StrictMode>
);
