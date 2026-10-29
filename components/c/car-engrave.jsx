import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zmg94893m.css';
import '../../css/t/ttu-kdb_o.css';
import '../../css/z/zzwkrdbkt.css';
import '../../css/o/op2j7xbfi.css';
import '../../css/p/ps_vgzj8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k zmg94893m"/><path class="ttu-kdb_o wm-shadow"/><path class="wm-k zzwkrdbkt"/><path class="op2j7xbfi wm-a"/><path class="ps_vgzj8q wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:car-engrave"} {...others} />);
}

export default Component;
