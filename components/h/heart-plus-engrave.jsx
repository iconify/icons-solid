import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bl2z4vbpn.css';
import '../../css/h/hanoadvko.css';
import '../../css/u/uh01hzbyb.css';
import '../../css/p/ph-75l5jk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bl2z4vbpn wm-k"/><path class="hanoadvko wm-shadow"/><path class="uh01hzbyb wm-k"/><path class="ph-75l5jk wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heart-plus-engrave"} {...others} />);
}

export default Component;
