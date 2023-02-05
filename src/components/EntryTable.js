import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EntryModal from './EntryModal';
import { getCategory } from '../utils/categories';
import * as React from 'react';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

// Table component that displays entries on home screen



export default function EntryTable({ entries }) {
   // handler for sort

   const [field, setField] = useState("name");
 
   
   entries.sort(function(a,b){
      return(a[field]<b[field]? -1: 1);
   });
   

   return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
               <TableRow>
                  <TableCell onClick={()=>setField("name")}>Name</TableCell>
                  <TableCell onClick={()=>setField("link")} align="right">Link</TableCell>
                  <TableCell onClick={()=>setField("user")} align="right">User</TableCell>
                  <TableCell onClick={()=>setField("category")} align="right">Category</TableCell>
                  <TableCell align="right">Open</TableCell>
                  <TableCell onClick={()=>setField("favorite")} >Favorite</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {entries.map((entry) => (
                  <TableRow
                     key={entry.id}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                     <TableCell component="th" scope="row" >
                        {entry.name}
                     </TableCell>
                     <TableCell align="right"><Link href={entry.link}>{entry.link}</Link></TableCell>
                     <TableCell align="right">{entry.user}</TableCell>
                     <TableCell align="right">{getCategory(entry.category).name}</TableCell>
                     <TableCell sx={{ "padding-top": 0, "padding-bottom": 0 }} align="right">
                        <EntryModal entry={entry} type="edit" />
                     </TableCell>
                     <Checkbox  
                     value="favorite" 
                     icon={<FavoriteBorder />} 
                     checkedIcon={<Favorite />} 
                     
/>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}
