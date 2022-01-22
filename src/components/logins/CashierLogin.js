import * as React from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from "react-router-dom";

import '../../assets/css/myTailwind.css'


import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import loginimg from '../../assets/images/logo.png'

export default function CashierLogin() {
    const paperStyle = {
        padding: '35px 15px',
        margin: "20px auto",
        // height: '70vh',
        width: 280,
        borderRadius: 10,
        // backgroundColor:"grey"
    }
    return (
        <>

            <Grid vs={3}>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>

                        <Avatar alt="ShareClub" src={loginimg} sx={{ width: 250, height: 250 }}
                        />
                        {/* <img alt="Remy Sharp" sx={{ width: 6, height: 6px }} src= /> */}
                        <h1 style={{ marginTop: "-60px" }}>Cashier login</h1>
                    </Grid>
                    <form>
                        <TextField id="username" style={{ marginTop: "px" }} label="Username" placeholder='Enter username' variant="standard" fullWidth />
                        <TextField id="password" style={{ marginTop: "10px" }} type='password' label="Password" placeholder='Enter password' variant="standard" fullWidth />

                        <FormGroup style={{ marginTop: "10px", fontSize: '1px' }}>
                            <FormControlLabel control={<Checkbox />} label="Remember me" />

                        </FormGroup>
                        <Link to='/CashierDashboard'>
                            <Button variant="contained" style={{ marginTop: "20px", backgroundColor: 'blue' }} fullWidth>Login</Button>
                        </Link>
                        <Button variant="outlined" type='reset' style={{ marginTop: "10px" }} fullWidth>Cancel</Button>
                       <div className=" my-2">I am <Button variant="contained" color="primary" size="small">
                          <Link to='/'>ADMIN</Link>
                        </Button> </div>
                      

                    </form>
                </Paper>
            </Grid>

        </>
    )
}
