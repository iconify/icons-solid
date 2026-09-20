import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hrkp-tbak.css';
import '../../css/v/vr39ulzpl.css';
import '../../css/h/h0g48wbnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hrkp-tbak"/><path class="vr39ulzpl"/><path class="h0g48wbnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pills-broken"} {...others} />);
}

export default Component;
