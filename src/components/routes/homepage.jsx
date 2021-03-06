/*
 * This is the homepage.
 * I think this page only needs a big-ass title and a big-ass search bar.
 */
import './homepage.css';
import BookCardContainer from '../book-card-container';

export default function Homepage(){
  return(
    <div className="homepage-container">
      <div className='homepage-info'>
        <h3 className='homepage-introduction'>Welcome to Textbook Exchange!<br></br>Start by searching a textbook or class of your choice</h3>
        <form className="homepage-search">
          <input type='text' className="homepage-search-bar"></input>
          <button className="homepage-search-submit-btn">Submit</button>
        </form>
      </div>
      <h3 className='homepage-introduction'>Look at all the books we have</h3>
      <div className='homepage-img'>
        <BookCardContainer direction='horizontal'/>
      </div>
      
    </div>
  )
}