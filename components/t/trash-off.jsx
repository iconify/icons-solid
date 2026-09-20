import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/h/hn-as6b7m.css';
import '../../css/s/sgl4o34ri.css';
import '../../css/q/qh7mljbyv.css';
import '../../css/e/ed3mcy8qt.css';
import '../../css/x/x3ybkcknw.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><rect class="hn-as6b7m"/><path clip-rule="evenodd" class="sgl4o34ri"/></g><path class="qh7mljbyv"/><path class="ed3mcy8qt"/><path clip-rule="evenodd" class="x3ybkcknw"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:trash-off"} {...others} />);
}

export default Component;
