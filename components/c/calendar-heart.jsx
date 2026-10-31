import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cf7nx1v6t.css';
import '../../css/m/m6joo21nb.css';
import '../../css/w/wzxa38bsa.css';
import '../../css/l/lajl8hbkl.css';
import '../../css/f/f7yctxbxs.css';
import '../../css/c/cv1dqim3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cf7nx1v6t wm-shadow"/><path class="m6joo21nb"/><path class="wzxa38bsa"/><path class="lajl8hbkl"/><path class="f7yctxbxs"/><path class="cv1dqim3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:calendar-heart"} {...others} />);
}

export default Component;
