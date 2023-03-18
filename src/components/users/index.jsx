import React from 'react'
import './users.css'
import * as Ai from "react-icons/ai";

function Users() {
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>User Type</th>
                    <th>Delete</th>
                </tr>
                <tr>
                    <td>Luffy</td>
                    <td>0942-5634-175</td>
                    <td>Admin</td>
                    <td><a href="#"><Ai.AiFillDelete/></a></td>
                </tr>
                <tr>
                    <td>Zorro</td>
                    <td>0928-3235-125</td>
                    <td>User</td>
                    <td><a href="#"><Ai.AiFillDelete/></a></td>
                </tr>
                <tr>
                    <td>Sanji</td>
                    <td>0928-7531-594</td>
                    <td>User</td>
                    <td><a href="#"><Ai.AiFillDelete/></a></td>
                </tr>
            </table>

            <div className="pagination">
                <a href="#">&laquo;</a>
                <a href="#" class="active">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
            </div>
        </div>
    )
}

export default Users