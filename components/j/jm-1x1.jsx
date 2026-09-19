import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i231l3b7a.css';
import '../../css/o/osc8j6bfj.css';
import '../../css/i/iy9ho8z4p.css';
import '../../css/k/k4_lb0mkc.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="d2kvgvbvc"><path class="i231l3b7a"/><path class="osc8j6bfj"/><path class="iy9ho8z4p"/><path class="k4_lb0mkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:jm-1x1"} {...others} />);
}

export default Component;
