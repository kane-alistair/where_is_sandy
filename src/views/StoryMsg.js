import React from 'react';

const whichMsg = (qnum) => {
  if (qnum === 1){
    return "Bob is having a wonderful day at home with his best pal Sandy. Where has he got to?"
  }

  if (qnum === 2){
    return "Bob was taking Sandy out for a walk but he seems to have run off."
  }

  if (qnum === 3){
    return "Bob has to get out of work before he gets to go home to Sandy."
  }

  if (qnum === 4){
    return "Bob was in an important meeting with his boss when he remembered that he left Sandy at the beach."
  }
}


const StoryMsg = (props) => {
  console.log("StoryMsg", props);
  return(
    <p className="center">{whichMsg(props.qnum)}</p>
  )
}

export default StoryMsg
