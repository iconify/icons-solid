import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l01wgmbii.css';
import '../../css/e/e980yoblz.css';
import '../../css/u/uu_zhdcpe.css';
import '../../css/h/h0rhmfbpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="l01wgmbii wm-k"/><path class="e980yoblz wm-shadow"/><path class="uu_zhdcpe wm-k"/><path class="h0rhmfbpn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:send-horizontal-engrave"} {...others} />);
}

export default Component;
