import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/po3mwhbob.css';
import '../../css/c/csggutbvi.css';
import '../../css/c/cpa-a-bgn.css';
import '../../css/z/z_t_5xs2k.css';
import '../../css/k/kwkygzbyd.css';
import '../../css/u/umhjfobpc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="po3mwhbob"/><path class="csggutbvi wm-a"/><path class="cpa-a-bgn wm-s"/><path class="wm-k z_t_5xs2k"/><path class="kwkygzbyd wm-a"/><path class="umhjfobpc wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plug-zap-sketch"} {...others} />);
}

export default Component;
