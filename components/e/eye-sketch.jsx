import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z3nm_s4sb.css';
import '../../css/m/mqdjwcc2h.css';
import '../../css/z/z-pktbist.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="z3nm_s4sb"/><path class="mqdjwcc2h wm-k"/><path class="wm-a z-pktbist"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:eye-sketch"} {...others} />);
}

export default Component;
