import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ps63a1nfy.css';
import '../../css/d/dpg9-v_lz.css';
import '../../css/n/npes4qb0y.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/sfccklbfi.css';
import '../../css/y/ylh7jhjfw.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="ps63a1nfy"/><path class="dpg9-v_lz"/><path class="npes4qb0y"/><g class="jn8qy4bru"><path class="sfccklbfi"/><path class="ylh7jhjfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:location-indicator-red"} {...others} />);
}

export default Component;
