import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/b/bxo9qtbau.css';
import '../../css/l/lg56q7bkc.css';
import '../../css/o/o0hdsoobe.css';
import '../../css/x/x6mx0hble.css';
import '../../css/l/l5doef26a.css';
import '../../css/n/nnelkfthe.css';
import '../../css/t/t87kt5ase.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="bxo9qtbau"/><path class="lg56q7bkc"/><path class="o0hdsoobe"/><path class="x6mx0hble"/><path class="l5doef26a"/><path class="nnelkfthe"/><path class="t87kt5ase"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:wind-vane"} {...others} />);
}

export default Component;
