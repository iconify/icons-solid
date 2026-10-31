import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sxeb9cbhy.css';
import '../../css/n/n_ltp9u_y.css';
import '../../css/a/aicjkwbxd.css';
import '../../css/z/z5k4hm6zq.css';
import '../../css/x/xyem8fn8v.css';
import '../../css/q/qrw40zq2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sxeb9cbhy wm-shadow"/><path class="n_ltp9u_y"/><path class="aicjkwbxd"/><path class="z5k4hm6zq"/><path class="xyem8fn8v"/><path class="qrw40zq2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:binoculars"} {...others} />);
}

export default Component;
