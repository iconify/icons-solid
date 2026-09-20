import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pn5tqtb4p.css';
import '../../css/v/v3-k5hhjl.css';
import '../../css/a/af3t0nyrd.css';
import '../../css/v/vn7srixjk.css';
import '../../css/e/ecz8exzik.css';
import '../../css/l/lkocxjbwr.css';
import '../../css/z/zj2p4py0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pn5tqtb4p"/><path class="v3-k5hhjl"/><path class="af3t0nyrd"/><path class="vn7srixjk"/><path class="ecz8exzik"/><path class="lkocxjbwr"/><path class="zj2p4py0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-broken"} {...others} />);
}

export default Component;
