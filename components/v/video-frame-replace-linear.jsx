import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/plbs7_b_u.css';
import '../../css/f/fyp478bsy.css';
import '../../css/w/w357jhe3h.css';
import '../../css/z/z9zrhebnw.css';
import '../../css/e/e3zt21b_v.css';
import '../../css/r/rkninmigh.css';
import '../../css/c/cgwp-jise.css';
import '../../css/u/uv3603bjt.css';
import '../../css/m/mxjwe0bkt.css';
import '../../css/r/rrznc8wdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="plbs7_b_u"/><path class="fyp478bsy"/><path class="w357jhe3h"/><path class="z9zrhebnw"/><path class="e3zt21b_v"/><path class="rkninmigh"/><path class="cgwp-jise"/><path class="uv3603bjt"/><path class="mxjwe0bkt"/><path class="rrznc8wdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-replace-linear"} {...others} />);
}

export default Component;
