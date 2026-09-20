import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/scfobobol.css';
import '../../css/q/q2cxxmbaq.css';
import '../../css/i/iz_17cc_j.css';
import '../../css/h/h3rm8q4za.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="scfobobol"/><path class="q2cxxmbaq"/><path class="iz_17cc_j"/><path class="h3rm8q4za"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-minimalistic-bold"} {...others} />);
}

export default Component;
