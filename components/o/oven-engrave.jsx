import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y51z3iz3m.css';
import '../../css/i/ioq3g7b0x.css';
import '../../css/o/oqx77ybwi.css';
import '../../css/y/yd5k-hbzc.css';
import '../../css/h/hm1lzmgnv.css';
import '../../css/v/v2jkl0frg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k y51z3iz3m"/><path class="ioq3g7b0x wm-shadow"/><path class="oqx77ybwi wm-k"/><path class="wm-a yd5k-hbzc"/><path class="hm1lzmgnv wm-s"/><path class="v2jkl0frg wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:oven-engrave"} {...others} />);
}

export default Component;
