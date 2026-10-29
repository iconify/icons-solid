import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xzizubbgh.css';
import '../../css/n/n5bw5rb1s.css';
import '../../css/v/vd_sncc5p.css';
import '../../css/p/pui78qb2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="xzizubbgh"/><path class="n5bw5rb1s wm-a"/><path class="vd_sncc5p wm-k"/><path class="pui78qb2p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:circle-chevron-up-sketch"} {...others} />);
}

export default Component;
