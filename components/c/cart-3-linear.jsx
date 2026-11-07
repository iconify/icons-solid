import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ahcwsvb2k.css';
import '../../css/u/ux4dmub_z.css';
import '../../css/l/lgdpnsvji.css';
import '../../css/a/a5lu9cbol.css';
import '../../css/m/mr-7tobra.css';
import '../../css/v/vxf2a878x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ahcwsvb2k"/><path class="ux4dmub_z"/><path class="lgdpnsvji"/><path class="a5lu9cbol"/><path class="mr-7tobra"/><path class="vxf2a878x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-3-linear"} {...others} />);
}

export default Component;
