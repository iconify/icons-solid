import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hxc6tmb0e.css';
import '../../css/a/aj0-n1bxl.css';
import '../../css/g/grm8oqpoo.css';
import '../../css/m/mq_7rmb8w.css';
import '../../css/n/np4g1kbug.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><g clip-rule="evenodd" class="d2kvgvbvc"><path class="hxc6tmb0e"/><path class="aj0-n1bxl"/><path class="grm8oqpoo"/><path class="mq_7rmb8w"/><path class="np4g1kbug"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:hand-point-open-circle-filled"} {...others} />);
}

export default Component;
