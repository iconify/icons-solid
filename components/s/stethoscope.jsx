import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/w_lspy05z.css';
import '../../css/m/mmovkubhf.css';
import '../../css/f/f1rysccpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="w_lspy05z wm-shadow"/><path class="mmovkubhf"/><path class="f1rysccpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:stethoscope"} {...others} />);
}

export default Component;
