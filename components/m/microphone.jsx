import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l1kpi4l9x.css';
import '../../css/l/lo2nqcdly.css';
import '../../css/l/lk0gm0ghl.css';
import '../../css/g/g16rerbrs.css';
import '../../css/i/i-q2dqbnv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="l1kpi4l9x wm-shadow"/><path class="lo2nqcdly"/><path class="lk0gm0ghl"/><path class="g16rerbrs"/><path class="i-q2dqbnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:microphone"} {...others} />);
}

export default Component;
