import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dv6re0b-t.css';
import '../../css/f/fg8gx3brw.css';
import '../../css/s/s8ro7484l.css';
import '../../css/a/ad99r3bgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dv6re0b-t"/><path class="fg8gx3brw"/><path class="s8ro7484l"/><path class="ad99r3bgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-call-broken"} {...others} />);
}

export default Component;
