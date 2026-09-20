import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/t/te-0t6rgn.css';
import '../../css/h/he8xujbzx.css';
import '../../css/r/r53dm4bds.css';
import '../../css/g/g_8lrzb7q.css';
import '../../css/x/x-exdccqr.css';
import '../../css/s/so9dkqjrz.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><g class="xyjtgccot"><path class="te-0t6rgn"/><path class="he8xujbzx"/><path class="r53dm4bds"/></g><path class="g_8lrzb7q"/><path class="x-exdccqr"/><path class="so9dkqjrz"/></g><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:arrow-up-right-off"} {...others} />);
}

export default Component;
