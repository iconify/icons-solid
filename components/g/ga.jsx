import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yrncfdc7x.css';
import '../../css/k/kowma_bmi.css';
import '../../css/t/t5lqdhfmd.css';

const viewBox = {"width":301,"height":225};
const content = `<g class="ft5dv1b6b"><path class="yrncfdc7x"/><path class="kowma_bmi"/><path class="t5lqdhfmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ga"} {...others} />);
}

export default Component;
