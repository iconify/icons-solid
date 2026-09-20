import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/e/e10tk9b_h.css';
import '../../css/v/v_o3fzbej.css';
import '../../css/l/lajajd1gy.css';
import '../../css/z/z9tjvobkq.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path clip-rule="evenodd" class="e10tk9b_h"/><path class="v_o3fzbej"/></g><path clip-rule="evenodd" class="lajajd1gy"/><path class="z9tjvobkq"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:stars-off"} {...others} />);
}

export default Component;
