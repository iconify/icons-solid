import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qj6nawbaf.css';
import '../../css/l/l63h4y7wb.css';
import '../../css/t/t5yb1_bbi.css';
import '../../css/w/wg3fq-7mc.css';
import '../../css/t/t1o88tbmc.css';

const viewBox = {"width":301,"height":219};
const content = `<g class="ft5dv1b6b"><path class="qj6nawbaf"/><path class="l63h4y7wb"/><path class="t5yb1_bbi"/><path class="wg3fq-7mc"/><path class="t1o88tbmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:no"} {...others} />);
}

export default Component;
