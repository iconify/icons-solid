import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/ar4aiwbri.css';
import '../../css/t/tdu1bxb1m.css';
import '../../css/g/g_pqqy7vh.css';
import '../../css/o/os1tppb2y.css';
import '../../css/u/usfw_kwgz.css';
import '../../css/n/n-qbpq9sp.css';
import '../../css/s/syg7vobut.css';
import '../../css/r/r71kh1d-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ar4aiwbri wm-shadow"/><path class="tdu1bxb1m"/><path class="g_pqqy7vh"/><path class="os1tppb2y"/><path class="usfw_kwgz"/><path class="n-qbpq9sp wm-s"/><path class="syg7vobut wm-s"/><path class="r71kh1d-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:worried"} {...others} />);
}

export default Component;
