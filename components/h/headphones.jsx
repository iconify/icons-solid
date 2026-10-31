import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u3rxgw2ip.css';
import '../../css/z/zu4i1xbee.css';
import '../../css/h/hpyuekbbe.css';
import '../../css/u/u4fque1ix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="u3rxgw2ip wm-shadow"/><path class="zu4i1xbee"/><path class="hpyuekbbe"/><path class="u4fque1ix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:headphones"} {...others} />);
}

export default Component;
