import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6up17k_u.css';
import '../../css/x/xuimp2bnk.css';
import '../../css/x/x198ew11v.css';
import '../../css/x/xdmykmblg.css';
import '../../css/o/oz_gfz7jt.css';
import '../../css/f/fe6to_bpf.css';
import '../../css/z/zuz7ckujc.css';

const viewBox = {"width":155,"height":55};
const content = `<g class="w6up17k_u"><path class="xuimp2bnk"/><path class="x198ew11v"/><path class="xdmykmblg"/><path class="oz_gfz7jt"/><path class="fe6to_bpf"/><path class="zuz7ckujc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:etihad"} {...others} />);
}

export default Component;
