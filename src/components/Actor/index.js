import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Img } from './Actor.styles';

const Actor=({name, character, imageUrl}) => (
    <Wrapper>
        <Img src={imageUrl} alt='actor-thumb'/>
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);

Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string,
}

export default Actor;