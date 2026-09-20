import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/r/ryb-qccmg.css';
import '../../css/u/uw6h1ebah.css';
import '../../css/u/u_hx4lbyi.css';
import '../../css/r/rts8bxb_f.css';
import '../../css/w/wjwzq6z_b.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path class="ryb-qccmg"/><path clip-rule="evenodd" class="uw6h1ebah"/></g><path clip-rule="evenodd" class="u_hx4lbyi"/><path clip-rule="evenodd" class="rts8bxb_f"/><path clip-rule="evenodd" class="wjwzq6z_b"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:eye-frame-circle"} {...others} />);
}

export default Component;
