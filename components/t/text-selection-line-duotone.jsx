import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sn70fibvm.css';
import '../../css/o/oc256ggcz.css';
import '../../css/p/p5qqdijym.css';
import '../../css/x/xnvv0pb9e.css';
import '../../css/q/qoc2w7prb.css';
import '../../css/b/baqv_u95v.css';
import '../../css/e/eu306zbbi.css';
import '../../css/d/d4tgdxbtn.css';
import '../../css/d/dr570wbqr.css';
import '../../css/d/dlpuuib8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sn70fibvm"/><path class="oc256ggcz"/><path class="p5qqdijym"/><path class="xnvv0pb9e"/><path class="qoc2w7prb"/><path class="baqv_u95v"/><path class="eu306zbbi"/><path class="d4tgdxbtn"/><path class="dr570wbqr"/><path class="dlpuuib8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-selection-line-duotone"} {...others} />);
}

export default Component;
