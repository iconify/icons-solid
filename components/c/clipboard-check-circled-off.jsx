import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/i/in-2olb0z.css';
import '../../css/k/k4r_ecbom.css';
import '../../css/f/fkv_ewbpq.css';
import '../../css/d/d-_t91b_v.css';
import '../../css/w/whr7_acot.css';
import '../../css/h/hh44s0b7u.css';
import '../../css/a/aoj0v-r_d.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path clip-rule="evenodd" class="in-2olb0z"/><path class="k4r_ecbom"/><path class="fkv_ewbpq"/></g><path clip-rule="evenodd" class="d-_t91b_v"/><path clip-rule="evenodd" class="whr7_acot"/><path clip-rule="evenodd" class="hh44s0b7u"/><path clip-rule="evenodd" class="aoj0v-r_d"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:clipboard-check-circled-off"} {...others} />);
}

export default Component;
