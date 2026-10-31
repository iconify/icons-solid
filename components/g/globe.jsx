import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/s/swq35w85q.css';
import '../../css/y/yv5hpeb2i.css';
import '../../css/r/re8x6iflq.css';
import '../../css/m/mz2q7_ypn.css';
import '../../css/r/rotm-ibzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="swq35w85q"/><path class="yv5hpeb2i"/><path class="re8x6iflq"/><path class="mz2q7_ypn"/><path class="rotm-ibzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:globe"} {...others} />);
}

export default Component;
