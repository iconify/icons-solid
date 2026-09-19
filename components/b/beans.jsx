import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n91y3gy_g.css';
import '../../css/c/ccuo0cgyo.css';
import '../../css/p/p92nq9akq.css';
import '../../css/w/w9no2ptwt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="n91y3gy_g"/><path class="ccuo0cgyo"/><path class="p92nq9akq"/><path class="w9no2ptwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:beans"} {...others} />);
}

export default Component;
