import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lji_-4zcb.css';
import '../../css/l/lqiam_bli.css';
import '../../css/r/rqc0ncbml.css';
import '../../css/f/f_18h-byr.css';
import '../../css/n/n81auxu-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="lji_-4zcb wm-shadow"/><path class="lqiam_bli"/><path class="rqc0ncbml"/><path class="f_18h-byr"/><path class="n81auxu-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:zoom-out"} {...others} />);
}

export default Component;
