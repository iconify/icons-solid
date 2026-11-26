import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc--wpv5i.css';
import '../../css/u/umg9mabsh.css';
import '../../css/l/leaprwbco.css';
import '../../css/w/w9smw2han.css';
import '../../css/y/y2-_ndbtp.css';
import '../../css/n/nk138_b6c.css';
import '../../css/y/yuwyb1bhw.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><radialGradient id="SVGNi6PQHDL" cx="77.6" cy="100" r="128" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".85" class="umg9mabsh"/><stop offset="1" class="umg9mabsh"/></radialGradient></defs><path class="leaprwbco"/><path fill="url(#SVGNi6PQHDL)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="w9smw2han"/><path class="y2-_ndbtp"/><path class="nk138_b6c"/><path class="yuwyb1bhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:white-circle"} {...others} />);
}

export default Component;
