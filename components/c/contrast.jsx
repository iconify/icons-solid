import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wg1orffma.css';
import '../../css/u/uyk-qnbwe.css';
import '../../css/i/iss7hukae.css';
import '../../css/j/ju8nv456d.css';
import '../../css/j/je3r3-0-v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wg1orffma wm-shadow"/><path class="uyk-qnbwe"/><path class="iss7hukae"/><path class="ju8nv456d"/><path class="je3r3-0-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:contrast"} {...others} />);
}

export default Component;
