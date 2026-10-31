import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rczdnpkkp.css';
import '../../css/w/wyt8f7b9l.css';
import '../../css/j/jkhbwcbmk.css';
import '../../css/s/s0g7icalo.css';
import '../../css/k/k2z0-lbpo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="rczdnpkkp wm-shadow"/><path class="wyt8f7b9l"/><path class="jkhbwcbmk"/><path class="s0g7icalo"/><path class="k2z0-lbpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cloud"} {...others} />);
}

export default Component;
