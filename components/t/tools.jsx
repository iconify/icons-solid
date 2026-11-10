import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yluwgdbjq.css';
import '../../css/i/iqysjwa7x.css';
import '../../css/q/q0i9czb5o.css';
import '../../css/t/t_0wqmbvo.css';
import '../../css/m/mi_9l2c0d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yluwgdbjq"/><path class="iqysjwa7x"/><path class="q0i9czb5o"/><path class="t_0wqmbvo"/><path class="mi_9l2c0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:tools"} {...others} />);
}

export default Component;
