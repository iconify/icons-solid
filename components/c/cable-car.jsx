import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/slrxgfbug.css';
import '../../css/j/j7t99w8pq.css';
import '../../css/h/hkbsvdbur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="slrxgfbug"/><rect class="j7t99w8pq"/><path class="hkbsvdbur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cable-car"} {...others} />);
}

export default Component;
