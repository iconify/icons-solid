import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/q/q7h0fqb4u.css';
import '../../css/u/uzjd8ywmi.css';
import '../../css/t/tk_pogb1q.css';
import '../../css/z/zb0z3vbgl.css';
import '../../css/p/pee5nxbvm.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><g class="xyjtgccot"><path class="q7h0fqb4u"/><path class="uzjd8ywmi"/><path class="tk_pogb1q"/></g><path class="zb0z3vbgl"/><path class="pee5nxbvm"/></g><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:pin-off"} {...others} />);
}

export default Component;
