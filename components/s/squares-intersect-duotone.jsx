import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5ymcabpn.css';
import '../../css/r/rkqb1nq9h.css';
import '../../css/w/wdpg8g0zd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z5ymcabpn"/><path class="rkqb1nq9h"/><path class="wdpg8g0zd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:squares-intersect-duotone"} {...others} />);
}

export default Component;
