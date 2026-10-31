import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f56v0cc4m.css';
import '../../css/a/aj0uub86n.css';
import '../../css/p/plx_iu8-c.css';
import '../../css/r/rzk02_bbf.css';
import '../../css/c/cp62yzlvi.css';
import '../../css/f/f5j4_wiyh.css';
import '../../css/n/nxavd12ey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="f56v0cc4m wm-shadow"/><path class="aj0uub86n"/><path class="plx_iu8-c"/><path class="rzk02_bbf"/><path class="cp62yzlvi wm-s"/><path class="f5j4_wiyh"/><path class="nxavd12ey wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:monitor-smartphone"} {...others} />);
}

export default Component;
