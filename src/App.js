import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

import Image from 'react-bootstrap/Image'

import 'bootstrap/dist/css/bootstrap.min.css'
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch(
  'WMHEBQM46F',
  '4a0b3708e9a49d82dcd329e4a4a4ed69'
);

class App extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <center><h2>Search for a template...</h2></center>

        <InstantSearch indexName="mxls_posts_template" searchClient={searchClient}>
          <div className="left-panel">
            <ClearRefinements />
            <h4>Categories</h4>
            <RefinementList attribute="taxonomies.category" />
            <Configure hitsPerPage={8} />
          </div>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />



            <Pagination />
          </div>
        </InstantSearch>
      </div>
    );
  }
}


function Hit(props) {
  return (
    <div>

      <div className="hit-name">
        <a href={props.hit.permalink}> <Highlight attribute="post_title" hit={props.hit} /> </a>

        {/* <Highlight attribute="post_title" hit={props.hit} /> */}
        <p></p>
        {/* <img src={props.hit.images.thumbnail.url} align="centre" alt={props.hit.name} /> */}
        <Image src={props.hit.images.thumbnail.url} alt={props.hit.name} thumbnail />
      </div>
      <div className="hit-description">
        {/* <Highlight attribute="content" hit={props.hit} /> */}
        {/* <Button size="sm" variant="primary">Read More</Button>{' '} */}
        {/* <Button size="sm" variant="success" href="https://marketxls.com">Buy Template </Button>{' '} */}
      </div>
      {/* <div className="hit-price">${props.hit.price}</div> */}
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
