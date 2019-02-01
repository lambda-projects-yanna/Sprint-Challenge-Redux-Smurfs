import axios from 'axios';

export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const getAction = () => dispatch => {
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => dispatch({type: GET_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: GET_FAILURE, payload: err}));
};

export const postAction = smurf => dispatch => {
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => dispatch({type: GET_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: GET_FAILURE, payload: err}));
};



/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
