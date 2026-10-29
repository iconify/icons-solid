import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f0jo1sayc.css';
import '../../css/m/mp2an_e3g.css';
import '../../css/n/nd_fneb4o.css';
import '../../css/j/jlp-ovbkm.css';
import '../../css/w/wm1y2mbyi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f0jo1sayc wm-k"/><path class="mp2an_e3g wm-a"/><path class="nd_fneb4o wm-shadow"/><path class="jlp-ovbkm wm-k"/><path class="wm-a wm1y2mbyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:brain-circuit-engrave"} {...others} />);
}

export default Component;
