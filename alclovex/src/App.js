import React from 'react';
import "./App.css"

const TaskBoard = () => {
  return (
    <div>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">
        <div className="App">
          <div className="layout">
            <div className="Sidebar">
              <div className="taskheader">
                <svg
                  className="tasklogo"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M2.0049 14.6196H8.40343V17.6993H2.0049V14.6196ZM11.6015 14.6196H17.9959V17.6993H11.6015V14.6196ZM2 8.46015H17.9976V11.5399H2V8.46015ZM2.0049 2.30072H11.6031V5.38044H2.0049V2.30072ZM14.8011 2.30072H18V5.38044H14.8011V2.30072Z"
                    fill="#263FA0"
                  ></path>
                </svg>
                Task boards
              </div>
              <div className="projects">
                <div className="objt1">Freelance Project</div>
                <div className="objt2">SBI Outsource</div>
                <div className="objt3">HPCL Project 1</div>
              </div>
              <div className="Btn">
                <button> + Add new Project</button>
              </div>
            </div>
            <div className="MyProjects">
              <div className="heading">Freelance Projects</div>
              
              <div className="container">
                <div className="column1">
                <div className="todo"> ● To Do</div>

                  
                  <div className="cards">
                    <div className="taskcont">Create a To-Do App</div>
                    <div className="time">
                      <div className="starttime1">
                        Start time
                        <input className="strttime" type="date" />
                      </div>
                      <div className="deadtime">
                        Deadline
                        <input className="strttime" type="date" />
                      </div>
                    </div>
                  </div>
                  <button className="todoadd">+ Add new</button>
                </div>
                <div className="column2">
                <div className="inprog"> ● In Progress</div>

                  
                  <button className="inprogadd">+ Add new</button>
                </div>
                <div className="column3">
                <div className="inrev"> ● In Review</div>

                  
                  <button className="inrevadd">+ Add new</button>
                </div>
                <div className="column4">
                <div className="comp"> ● Completed</div>

                  
                  <button className="completedadd">+ Add new</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
