import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc--wpv5i.css';
import '../../css/u/umg9mabsh.css';
import '../../css/n/nyi3arbdv.css';
import '../../css/d/d2jr_cbdj.css';
import '../../css/k/kasmckrap.css';
import '../../css/m/mt2wykbfo.css';
import '../../css/l/lc2e2piri.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGejzrEbkD" cx="56.2" cy="46.8" r="124.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".85" class="umg9mabsh"/><stop offset="1" class="umg9mabsh"/></radialGradient></defs><path class="nyi3arbdv"/><path fill="url(#SVGejzrEbkD)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="d2jr_cbdj"/><path class="kasmckrap"/><path class="mt2wykbfo"/><path class="lc2e2piri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:white-medium-square"} {...others} />);
}

export default Component;
