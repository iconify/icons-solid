import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rp0m-nb7w.css';
import '../../css/k/kdhnjd3qk.css';
import '../../css/s/s6987tevs.css';
import '../../css/w/wu6md96gy.css';
import '../../css/w/we348tpyt.css';
import '../../css/s/s_k061a0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="rp0m-nb7w wm-shadow"/><path class="kdhnjd3qk"/><path class="s6987tevs"/><path class="wu6md96gy"/><path class="we348tpyt"/><path class="s_k061a0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:hospital"} {...others} />);
}

export default Component;
