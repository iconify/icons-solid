import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qz5i1miti.css';
import '../../css/o/o5_vxlb_k.css';
import '../../css/t/t5gmhdcyl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qz5i1miti"/><path class="o5_vxlb_k"/><path class="t5gmhdcyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:tablet-smartphone-duotone"} {...others} />);
}

export default Component;
