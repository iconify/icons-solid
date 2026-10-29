import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f2vgj7brb.css';
import '../../css/g/g9pktccmz.css';
import '../../css/o/ol-kpp5cg.css';
import '../../css/o/owhkmsqmp.css';
import '../../css/g/gcl_rzbbb.css';
import '../../css/c/cph2zc1da.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f2vgj7brb wm-k"/><path class="g9pktccmz wm-a"/><path class="ol-kpp5cg wm-s"/><path class="owhkmsqmp wm-shadow"/><path class="gcl_rzbbb wm-k"/><path class="cph2zc1da wm-a"/><path class="qr4ochb5c wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:eye-off-engrave"} {...others} />);
}

export default Component;
