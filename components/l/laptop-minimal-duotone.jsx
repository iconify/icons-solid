import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qsj7i0s5h.css';
import '../../css/u/ukf_qkbcb.css';
import '../../css/h/h4t8hzb4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qsj7i0s5h"/><path class="ukf_qkbcb"/><path class="h4t8hzb4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:laptop-minimal-duotone"} {...others} />);
}

export default Component;
