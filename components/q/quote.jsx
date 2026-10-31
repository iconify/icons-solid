import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n2hkj17up.css';
import '../../css/c/cm6ugp8yx.css';
import '../../css/e/epvbi4knj.css';
import '../../css/b/bz1sxkvwm.css';
import '../../css/k/ks3ldkbbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="n2hkj17up wm-shadow"/><path class="cm6ugp8yx"/><path class="epvbi4knj"/><path class="bz1sxkvwm"/><path class="ks3ldkbbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:quote"} {...others} />);
}

export default Component;
