import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser,updateUser,deleteUser } from "./features/Users";
import { useState } from "react";

function App() {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsrename] = useState("");
  const [newUsername, setNewUsrename] = useState("");
console.log(userList);
  return (
    <div className="App">
      <h1>React Redux CRUD</h1>
      <div className="addUser">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => setUsrename(e.target.value)}
          type="text"
          placeholder="User Name"
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <h3>{user.username}</h3>

              <input
                onChange={(e) => setNewUsrename(e.target.value)}
                type="text"
                placeholder="New Username"
              />
              <button onClick={() => dispatch(updateUser({id:user.id,username: newUsername}))}>
                Update UserName
              </button>
              <button onClick={() => dispatch(deleteUser({ id: user.id }))}>
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
