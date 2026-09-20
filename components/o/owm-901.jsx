import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pq8m6qynl.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="pq8m6qynl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:owm-901"} {...others} />);
}

export default Component;
