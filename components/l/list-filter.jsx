import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/m/m2j4lv-jz.css';
import '../../css/i/il4leccpr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGeOdOreWV" x1="1.9" x2="22.1" y1="4.9" y2="19.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="m2j4lv-jz wm-k"/><path fill="url(#SVGeOdOreWV)" class="il4leccpr wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-suite:list-filter"} {...others} />);
}

export default Component;
