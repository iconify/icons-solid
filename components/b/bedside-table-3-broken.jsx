import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/khhypgwbg.css';
import '../../css/d/d2-0y-bwi.css';
import '../../css/n/nv6qhg7zp.css';
import '../../css/s/sxx_hdb0w.css';
import '../../css/z/zpppr_yxj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="khhypgwbg"/><path class="d2-0y-bwi"/><path class="nv6qhg7zp"/><path class="sxx_hdb0w"/><path class="zpppr_yxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bedside-table-3-broken"} {...others} />);
}

export default Component;
