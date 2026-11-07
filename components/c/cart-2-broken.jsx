import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lgdpnsvji.css';
import '../../css/n/nuo3p4bss.css';
import '../../css/l/l_nzbpb7n.css';
import '../../css/u/ux4dmub_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lgdpnsvji"/><path class="nuo3p4bss"/><path class="l_nzbpb7n"/><path class="ux4dmub_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-2-broken"} {...others} />);
}

export default Component;
