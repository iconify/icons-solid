import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc--wpv5i.css';
import '../../css/e/eslt0-bvv.css';
import '../../css/k/ksgwgomip.css';
import '../../css/q/qo9wp3bzt.css';
import '../../css/r/r8mc3de4g.css';
import '../../css/f/fb3t1lgzo.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGGScXJcpP" cx="77.6" cy="55.6" r="128" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".28" class="vc--wpv5i"/><stop offset=".85" class="eslt0-bvv"/><stop offset="1" class="eslt0-bvv"/></radialGradient></defs><g transform="matrix(3 0 0 3 -64.799 -19.769)"><path class="ksgwgomip"/><path fill="url(#SVGGScXJcpP)" class="qo9wp3bzt"/><path class="r8mc3de4g"/><ellipse transform="rotate(-40 76 62)" class="fb3t1lgzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:wing"} {...others} />);
}

export default Component;
