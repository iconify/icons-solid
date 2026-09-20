import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/khhypgwbg.css';
import '../../css/k/kuresbtjc.css';
import '../../css/r/rp5yf760j.css';
import '../../css/d/d2-0y-bwi.css';
import '../../css/u/u3xw_g32v.css';
import '../../css/u/u-d3qccyr.css';
import '../../css/v/vy5waob-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="khhypgwbg"/><path class="kuresbtjc"/><path class="rp5yf760j"/><path class="d2-0y-bwi"/><path class="u3xw_g32v"/><path class="u-d3qccyr"/><path class="vy5waob-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bedside-table-broken"} {...others} />);
}

export default Component;
