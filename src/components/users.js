import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from '../actions/userAction'

const Users = () => {
    const dispatch = useDispatch()
    const usersList = useSelector(state => state.usersList)
    const {loading, error, users} = usersList
    useEffect(() => {
        dispatch(getUsers()) 
      }, [dispatch])
    return (
        <>
            {loading ? "Loading..." : error ? error.message : 
            users.map(u => <h3 key={u.name} 
            style={{textAlign:"center"}}>{u.name}</h3>)}
        </>
    )
}

export default Users