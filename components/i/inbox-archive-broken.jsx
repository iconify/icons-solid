import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xyrhgtb_n.css';
import '../../css/m/mcy0xgi_f.css';
import '../../css/i/i_swdrbum.css';
import '../../css/r/rr_l-tqjq.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xyrhgtb_n"/><path class="mcy0xgi_f"/><path class="i_swdrbum"/><path class="rr_l-tqjq"/><path class="si_mtzbvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:inbox-archive-broken"} {...others} />);
}

export default Component;
