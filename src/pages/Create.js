import React from "react";
import { useState } from "react";
import { Container, TextField, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  field:{
    marginTop: 16 ,
    marginBottom: 16 ,
    display:'block',
  },
  title:{
    textDecoration:'underline',
    marginBottom:25,
    cursor: 'pointer',
  },
  
})

export default function Create() {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)

  
  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if(title == '' ){
      setTitleError(true)
    }
    if(details == ''){
      setDetailsError(true)
    }
    if(title && details){
      console.log(title,details)
    }
  }

  return (
    <Container>
      <Typography 
      variant="h6" 
      component="h2"
      gutterBottom
      color ="textSecondary"
      align="center"
      Wrap
      className={classes.title}

      >
        Create a new note
      </Typography>
      

      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <TextField 
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label='Note title'
          color="secondary"
          variant="outlined"
          fullWidth
          required
          error={titleError}
        />
        <TextField 
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label='Details'
          color="secondary"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
          />
        <Button
          className={classes.btn}
          type="submit"
          variant="contained"
          color="secondary"
          endIcon={<ArrowForwardIosOutlinedIcon />}
          >submit
        </Button>
      </form>

      <br />
      {/* Icons */}

    </Container>
  );
}
