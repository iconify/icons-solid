import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zg05_8bth.css';
import '../../css/g/g0m-uo1ig.css';
import '../../css/q/qp_f2rhnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zg05_8bth"/><path class="g0m-uo1ig"/><path class="qp_f2rhnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:briefcase-business-duotone"} {...others} />);
}

export default Component;
