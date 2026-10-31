import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gjjbgxjba.css';
import '../../css/u/u629kubmn.css';
import '../../css/z/z3d_d9bhh.css';
import '../../css/i/i8m0vsq3r.css';
import '../../css/j/j06d1ab8e.css';
import '../../css/w/wk4-ckbvc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gjjbgxjba wm-shadow"/><path class="u629kubmn"/><path class="z3d_d9bhh"/><path class="i8m0vsq3r"/><path class="j06d1ab8e"/><path class="wk4-ckbvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:palette"} {...others} />);
}

export default Component;
