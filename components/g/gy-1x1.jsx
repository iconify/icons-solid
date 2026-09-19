import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/ga715lb3o.css';
import '../../css/q/qpz28dydz.css';
import '../../css/z/zjbhag62p.css';
import '../../css/b/bjklcmb8a.css';
import '../../css/s/sesalrv-s.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="d2kvgvbvc"><path class="ga715lb3o"/><path class="qpz28dydz"/><path class="zjbhag62p"/><path class="bjklcmb8a"/><path class="sesalrv-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:gy-1x1"} {...others} />);
}

export default Component;
