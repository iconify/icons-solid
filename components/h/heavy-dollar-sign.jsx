import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xab6nwpco.css';
import '../../css/t/tev46ccry.css';
import '../../css/r/r2sq9_blt.css';
import '../../css/w/w6ylm5bhg.css';
import '../../css/w/w94mbybjf.css';
import '../../css/y/yd48dbbrk.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGXp3jdeXJ" cx="84.2" cy="59.4" r="130.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="xab6nwpco"/><stop offset=".85" class="tev46ccry"/><stop offset="1" class="tev46ccry"/></radialGradient></defs><path class="r2sq9_blt"/><path fill="url(#SVGXp3jdeXJ)" transform="matrix(2.2 0 0 2.2 32.398 38.008)" class="w6ylm5bhg"/><path class="w94mbybjf"/><path class="yd48dbbrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:heavy-dollar-sign"} {...others} />);
}

export default Component;
