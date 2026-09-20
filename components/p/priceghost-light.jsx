import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kckc1iwlf.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/w/wefqhcm6u.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGMZJ75ddv" x1="211.539" x2="300.461" y1="3.847" y2="508.153" gradientUnits="userSpaceOnUse"><stop offset="0" class="kckc1iwlf"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGMZJ75ddv)" class="wefqhcm6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:priceghost-light"} {...others} />);
}

export default Component;
