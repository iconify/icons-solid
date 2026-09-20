import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/om4lnzbpu.css';
import '../../css/b/bpkt4gbdh.css';
import '../../css/s/sp15d0bxe.css';
import '../../css/k/km0rz_boi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="om4lnzbpu"/><path class="bpkt4gbdh"/><path class="sp15d0bxe"/><path class="km0rz_boi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:password-minimalistic-input-broken"} {...others} />);
}

export default Component;
