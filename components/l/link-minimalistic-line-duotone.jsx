import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/arzno-wyz.css';
import '../../css/o/o_taswthd.css';
import '../../css/c/cwc236bjm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="arzno-wyz"/><path class="o_taswthd"/><path class="cwc236bjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-minimalistic-line-duotone"} {...others} />);
}

export default Component;
