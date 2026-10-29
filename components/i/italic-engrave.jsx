import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/es-93ttzx.css';
import '../../css/h/h0a4pacnc.css';
import '../../css/k/k-_um54tc.css';
import '../../css/b/buvuav6_l.css';
import '../../css/y/y9asu80_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="es-93ttzx wm-k"/><path class="h0a4pacnc wm-a"/><path class="k-_um54tc wm-shadow"/><path class="buvuav6_l wm-k"/><path class="wm-a y9asu80_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:italic-engrave"} {...others} />);
}

export default Component;
