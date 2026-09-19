import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gw-3o2bdq.css';
import '../../css/t/t8wqp2bay.css';
import '../../css/x/xb0hh6bzv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gw-3o2bdq"/><path class="t8wqp2bay"/><path class="xb0hh6bzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:doughnut"} {...others} />);
}

export default Component;
