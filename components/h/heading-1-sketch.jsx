import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dk_3_ehmm.css';
import '../../css/p/pjlbnhb5m.css';
import '../../css/i/isddsmbki.css';
import '../../css/c/c763fsb7r.css';
import '../../css/r/rrjphnixu.css';
import '../../css/k/ks7m_ibcp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dk_3_ehmm wm-k"/><path class="pjlbnhb5m wm-a"/><path class="isddsmbki wm-s"/><path class="c763fsb7r wm-k"/><path class="rrjphnixu wm-a"/><path class="ks7m_ibcp wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heading-1-sketch"} {...others} />);
}

export default Component;
