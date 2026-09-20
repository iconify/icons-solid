import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/e/extnxvbdz.css';
import '../../css/t/t2zhdp_cw.css';
import '../../css/j/jg_oybbbr.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="extnxvbdz"/><path clip-rule="evenodd" class="t2zhdp_cw"/></g><path clip-rule="evenodd" class="jg_oybbbr"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:grid-off"} {...others} />);
}

export default Component;
