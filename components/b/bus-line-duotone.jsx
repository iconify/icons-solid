import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l_ck4_b3q.css';
import '../../css/c/cnl52bbbi.css';
import '../../css/q/qy9-4uicp.css';
import '../../css/j/jl627cb0x.css';
import '../../css/u/us1wg3bcv.css';
import '../../css/p/pz-veqbkt.css';
import '../../css/x/x06f3yqhd.css';
import '../../css/k/kf62t6s5z.css';
import '../../css/e/elkaa553f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l_ck4_b3q"/><path class="cnl52bbbi"/><path class="qy9-4uicp"/><path class="jl627cb0x"/><path class="us1wg3bcv"/><path class="pz-veqbkt"/><path class="x06f3yqhd"/><path class="kf62t6s5z"/><path class="elkaa553f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bus-line-duotone"} {...others} />);
}

export default Component;
