import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mmq6zvbgf.css';
import '../../css/k/k8mwp_zry.css';
import '../../css/f/fg9hpm71u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mmq6zvbgf"/><path class="k8mwp_zry"/><path class="fg9hpm71u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:printer-minimalistic-broken"} {...others} />);
}

export default Component;
