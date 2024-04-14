import './index.css'

const PlayItem = props => {
  const {playDetails, deleteItem} = props
  const {id, imageUrl, name, genre, duration} = playDetails

  const onClickDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-items">
      <div className="img-name">
        <img src={imageUrl} alt="track" className="image" />
        <div className="name-genre-container">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p className="name">{duration}</p>
        <button type="button" data-testid='delete' className="delete" onClick={onClickDelete}>
          delete
        </button>
      </div>
    </li>
  )
}

export default PlayItem
