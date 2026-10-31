import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t1y-cbbzh.css';
import '../../css/r/rjg13i08f.css';
import '../../css/p/ptssi9bmh.css';
import '../../css/q/qqrg_y-jo.css';
import '../../css/v/v189pn1ui.css';
import '../../css/k/ksmoel62g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="t1y-cbbzh wm-shadow"/><path class="rjg13i08f"/><path class="ptssi9bmh"/><path class="qqrg_y-jo"/><path class="v189pn1ui"/><path class="ksmoel62g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:map-pin-check"} {...others} />);
}

export default Component;
