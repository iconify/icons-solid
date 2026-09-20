import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mzncedspo.css';
import '../../css/y/yva4__bne.css';
import '../../css/h/hh_3v458p.css';
import '../../css/f/f6a2dhcys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mzncedspo"/><path class="yva4__bne"/><path class="hh_3v458p"/><path class="f6a2dhcys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bill-broken"} {...others} />);
}

export default Component;
