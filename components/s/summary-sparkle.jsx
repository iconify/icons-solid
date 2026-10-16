import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tsxa_3x8n.css';
import '../../css/f/fa1e0wb3i.css';
import '../../css/h/hmh1nvbga.css';
import '../../css/f/fvk4_ub_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tsxa_3x8n"/><path class="fa1e0wb3i"/><path class="hmh1nvbga"/><path class="fvk4_ub_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:summary-sparkle"} {...others} />);
}

export default Component;
