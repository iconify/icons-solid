import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nv5a3cfjf.css';
import '../../css/y/y8kymzbfs.css';
import '../../css/s/s1zkajbpx.css';
import '../../css/f/f_18h-byr.css';
import '../../css/a/apddmql3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="nv5a3cfjf wm-shadow"/><path class="y8kymzbfs"/><path class="s1zkajbpx"/><path class="f_18h-byr"/><path class="apddmql3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:search"} {...others} />);
}

export default Component;
