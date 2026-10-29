import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/h/h2rm9ab3j.css';
import '../../css/c/ckl4cuwcw.css';
import '../../css/s/sbp_d6hyc.css';
import '../../css/c/c_2s2_bqu.css';
import '../../css/n/n1pj_7b9c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGCtWPabEQ" x1="13.1" x2="19.9" y1="1.6" y2="8.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient><linearGradient id="SVGbd4YzeYp" x1="2.4" x2="21.6" y1="2.8" y2="21.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="h2rm9ab3j wm-a"/><path fill="url(#SVGCtWPabEQ)" class="ckl4cuwcw wm-a"/><path class="sbp_d6hyc wm-k"/><path class="c_2s2_bqu wm-k"/><path fill="url(#SVGbd4YzeYp)" class="n1pj_7b9c wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-suite:rotate-cw"} {...others} />);
}

export default Component;
