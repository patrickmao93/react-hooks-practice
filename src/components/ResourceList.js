import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = props => {
  const [resource, setResources] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  };

  useEffect(
    () => {
      fetchResource(resource);
    },
    [resource]
  );

  return <div>{resource.length}</div>;
};

export default ResourceList;
