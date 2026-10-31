import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t1bfb5bmw.css';
import '../../css/x/xite_57fl.css';
import '../../css/w/wui8mvbek.css';
import '../../css/d/drk43q95s.css';
import '../../css/f/fql3nbclx.css';
import '../../css/f/fjxpbcbpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="t1bfb5bmw wm-shadow"/><path class="xite_57fl"/><path class="wui8mvbek"/><path class="drk43q95s"/><path class="fql3nbclx"/><path class="fjxpbcbpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:coins"} {...others} />);
}

export default Component;
