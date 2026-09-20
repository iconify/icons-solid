import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/r/r9hsxfmmv.css';
import '../../css/u/uf1309bqi.css';
import '../../css/a/a5t9lvbdm.css';
import '../../css/b/bc4no_b3l.css';
import '../../css/a/ahiimqb-d.css';
import '../../css/v/v265wlblk.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><g class="xyjtgccot"><path class="r9hsxfmmv"/><path class="uf1309bqi"/><path class="a5t9lvbdm"/></g><path class="bc4no_b3l"/><path class="ahiimqb-d"/><path class="v265wlblk"/></g><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:arrow-down-right-off"} {...others} />);
}

export default Component;
