import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yk8ykmbaw.css';
import '../../css/g/gnqk5acuv.css';
import '../../css/o/o8g2dtbln.css';
import '../../css/o/o1sgbof6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow yk8ykmbaw"/><path class="gnqk5acuv"/><path class="o8g2dtbln"/><path class="o1sgbof6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:network"} {...others} />);
}

export default Component;
