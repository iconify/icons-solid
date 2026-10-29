import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fstdpfbpb.css';
import '../../css/x/xx0opqa2p.css';
import '../../css/x/x66npnb9v.css';
import '../../css/q/qzjcltb8z.css';
import '../../css/p/pnvt6qvuv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fstdpfbpb"/><path class="wm-k xx0opqa2p"/><path class="wm-a x66npnb9v"/><path class="qzjcltb8z wm-k"/><path class="pnvt6qvuv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flask-conical-sketch"} {...others} />);
}

export default Component;
