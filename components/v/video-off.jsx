import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e5izgbcez.css';
import '../../css/k/kazu6jo1o.css';
import '../../css/b/bn-zn_law.css';
import '../../css/n/nbz7rolev.css';
import '../../css/u/up7w6abgp.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="e5izgbcez wm-shadow"/><path class="kazu6jo1o"/><path class="bn-zn_law"/><path class="nbz7rolev"/><path class="up7w6abgp"/><path class="v0eyaibau wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:video-off"} {...others} />);
}

export default Component;
