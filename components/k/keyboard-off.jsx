import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tcpw9dbhb.css';
import '../../css/v/vxyzikbdq.css';
import '../../css/v/vx8vwrb_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tcpw9dbhb"/><path class="vxyzikbdq"/><path class="vx8vwrb_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:keyboard-off"} {...others} />);
}

export default Component;
