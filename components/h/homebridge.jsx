import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2sjrobfj.css';
import '../../css/o/ov0v2xbxn.css';
import '../../css/i/iycln-b8i.css';
import '../../css/k/k05n1gbkm.css';
import '../../css/n/na4nc3bgm.css';
import '../../css/t/tipw_dbaw.css';
import '../../css/v/vjuganykr.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGSLaDddqN" x1="256" x2="256" y2="512" gradientUnits="userSpaceOnUse"><stop offset="0" class="k2sjrobfj"/><stop offset="1" class="ov0v2xbxn"/></linearGradient><circle fill="url(#SVGSLaDddqN)" class="iycln-b8i"/><radialGradient id="SVGZ5kanbdS" cx="256" cy="256" r="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="k05n1gbkm"/><stop offset=".86" class="na4nc3bgm"/><stop offset="1" class="tipw_dbaw"/></radialGradient><circle fill="url(#SVGZ5kanbdS)" class="iycln-b8i"/><path class="vjuganykr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:homebridge"} {...others} />);
}

export default Component;
