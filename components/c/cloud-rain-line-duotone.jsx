import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/ty35h9b_q.css';
import '../../css/v/vbgcwqb6e.css';
import '../../css/b/bi7mdqb8a.css';
import '../../css/t/tkzm_abvq.css';
import '../../css/t/to23gco_r.css';
import '../../css/n/nja6m3bms.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ty35h9b_q"/><path class="vbgcwqb6e"/><path class="bi7mdqb8a"/><path class="tkzm_abvq"/><path class="to23gco_r"/><path class="nja6m3bms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-rain-line-duotone"} {...others} />);
}

export default Component;
