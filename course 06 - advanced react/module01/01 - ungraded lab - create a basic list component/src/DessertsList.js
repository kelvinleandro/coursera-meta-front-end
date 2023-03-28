function DessertsList(props) {
  // Implement the component here.
  const filtered = props.data.filter(d => d.calories < 500);
  let sortedArray = filtered.sort(
    (p1, p2) => (p1.calories - p2.calories)).map(d => {
      return(<li>{d.name} - {d.calories} cal</li>)
  });

  return <ul>{sortedArray}</ul>;
}
export default DessertsList;
