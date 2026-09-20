import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/iwx5-7wia.css';
import '../../css/z/zh3o0hkcq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="iwx5-7wia"/><path class="zh3o0hkcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:share-link"} {...others} />);
}

export default Component;
