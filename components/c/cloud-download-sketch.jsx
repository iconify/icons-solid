import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i5ft99b3t.css';
import '../../css/m/moyq6cc5d.css';
import '../../css/m/m2ebxhp-u.css';
import '../../css/v/vkmadnjhr.css';
import '../../css/n/nqpb-kb-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="i5ft99b3t"/><path class="moyq6cc5d wm-k"/><path class="m2ebxhp-u wm-k"/><path class="vkmadnjhr wm-s"/><path class="nqpb-kb-p wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-download-sketch"} {...others} />);
}

export default Component;
