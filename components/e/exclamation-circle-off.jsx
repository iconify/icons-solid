import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/t/tpt4cybya.css';
import '../../css/t/te_vsvmkm.css';
import '../../css/s/sl1u3-b3g.css';
import '../../css/u/uwqxojbun.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path clip-rule="evenodd" class="tpt4cybya"/><path class="te_vsvmkm"/></g><path clip-rule="evenodd" class="sl1u3-b3g"/><path class="uwqxojbun"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:exclamation-circle-off"} {...others} />);
}

export default Component;
