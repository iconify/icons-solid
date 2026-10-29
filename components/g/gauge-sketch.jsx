import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/id8-p4bmo.css';
import '../../css/p/p-e4iwb_m.css';
import '../../css/a/aavn8cvga.css';
import '../../css/d/d_k9hzb-w.css';
import '../../css/k/kigmoib5x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="id8-p4bmo"/><path class="p-e4iwb_m wm-k"/><path class="aavn8cvga wm-a"/><path class="d_k9hzb-w wm-k"/><path class="kigmoib5x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gauge-sketch"} {...others} />);
}

export default Component;
