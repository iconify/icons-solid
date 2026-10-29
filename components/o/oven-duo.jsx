import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wl26z3buk.css';
import '../../css/h/hm1lzmgnv.css';
import '../../css/o/oqx77ybwi.css';
import '../../css/y/yd5k-hbzc.css';
import '../../css/v/v2jkl0frg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wl26z3buk"/><path class="hm1lzmgnv wm-s"/><path class="oqx77ybwi"/><path class="wm-a yd5k-hbzc"/><path class="v2jkl0frg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:oven-duo"} {...others} />);
}

export default Component;
