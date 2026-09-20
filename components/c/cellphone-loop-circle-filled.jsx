import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/j/j3037bcit.css';
import '../../css/o/os-ibivrc.css';
import '../../css/g/gcjffpk1n.css';
import '../../css/y/y41r9ilfq.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><path class="j3037bcit"/><path clip-rule="evenodd" class="os-ibivrc"/><path clip-rule="evenodd" class="gcjffpk1n"/><path clip-rule="evenodd" class="y41r9ilfq"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:cellphone-loop-circle-filled"} {...others} />);
}

export default Component;
