import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hvfbjwbsp.css';
import '../../css/q/qf-b36b6q.css';
import '../../css/u/uld1ltb0f.css';
import '../../css/t/t_0wqmbvo.css';
import '../../css/g/g-vqucczn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hvfbjwbsp"/><path class="qf-b36b6q"/><path class="uld1ltb0f"/><path class="t_0wqmbvo"/><path class="g-vqucczn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:tools"} {...others} />);
}

export default Component;
