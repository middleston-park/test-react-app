import React from 'react';
import Paper from '@material-ui/core/Paper';

function Header() {
    return (
        <Paper style={{padding: "5px", display: "flex"}} square elevation={3}>
            <img 
                style={{width: "50px"}}
                src={process.env.PUBLIC_URL+'/images/Middleston Park Logo.jpg'}>
            </img>
            <h1 style={{margin: "0", fontFamily:"cursive", fontWeight:"100"}}>Middleston Park</h1>
        </Paper>
    );
}

export default Header;
