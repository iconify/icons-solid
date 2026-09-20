import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p65p1hbxh.css';
import '../../css/i/ix2yyfqqg.css';
import '../../css/a/axy_-vb0r.css';
import '../../css/r/rho2h4_9z.css';
import '../../css/v/vy5waob-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p65p1hbxh"/><path class="ix2yyfqqg"/><path class="axy_-vb0r"/><path class="rho2h4_9z"/><path class="vy5waob-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bedside-table-2-line-duotone"} {...others} />);
}

export default Component;
