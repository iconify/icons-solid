import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/a/a3-li-bcv.css';
import '../../css/v/vcmhjlbvo.css';
import '../../css/k/kukih6b7d.css';
import '../../css/v/vbrgldbze.css';
import '../../css/h/huryzsb_k.css';
import '../../css/m/m1hqp6bxa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><g class="mc2zb0bvp"><path class="a3-li-bcv"/><path class="vcmhjlbvo"/></g><path class="kukih6b7d"/><path class="vbrgldbze"/><path class="huryzsb_k"/><path class="m1hqp6bxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:like-line-duotone"} {...others} />);
}

export default Component;
