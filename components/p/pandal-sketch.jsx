import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oodxp7bbg.css';
import '../../css/j/jc8rmbbwf.css';
import '../../css/w/wrazlswpt.css';
import '../../css/f/fn2bv2b_d.css';
import '../../css/r/rsmf1ubtf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="oodxp7bbg wm-deco"/><path class="jc8rmbbwf wm-k"/><path class="wm-k wrazlswpt"/><path class="fn2bv2b_d wm-a"/><path class="rsmf1ubtf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pandal-sketch"} {...others} />);
}

export default Component;
