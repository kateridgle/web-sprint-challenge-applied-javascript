import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const tabsDiv = document.createElement('div');
  tabsDiv.classList.add('topics');
  // const tabsJavascript =document.createElement('div');
  // tabsJavascript.classList.add('tab');
  // tabsJavascript.textContent = topic;
  // const tabsBootstrap = document.createElement('div');
  // tabsBootstrap.classList.add('tab');
  // tabsBootstrap.textContent = topic;
  // const tabsTechnology = document.createElement('div');
  // tabsTechnology.classList.add('tab');
  // tabsTechnology.textContent = topic;

  topics.forEach(topic => {
  const tabDiv = document.createElement('div');
  tabDiv.classList.add('tab');
  tabDiv.textContent = topic;
  tabsDiv.appendChild(tabDiv);
  });

  return tabsDiv;
}

const tabsAppender = (selector) => {

  axios.get('http://localhost:5001/api/topics').then(res => {
  const topics = Tabs(res.data.topics);
  // console.log(topics);
  document.querySelector(selector).appendChild(topics);
  })
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
