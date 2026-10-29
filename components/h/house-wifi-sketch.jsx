import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tghhffbog.css';
import '../../css/i/i3ovwuonc.css';
import '../../css/k/kllmgpohz.css';
import '../../css/p/ppm0i_bsu.css';
import '../../css/u/u9mj2bo0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="tghhffbog"/><path class="i3ovwuonc wm-k"/><path class="kllmgpohz wm-a"/><path class="ppm0i_bsu wm-k"/><path class="u9mj2bo0i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:house-wifi-sketch"} {...others} />);
}

export default Component;
