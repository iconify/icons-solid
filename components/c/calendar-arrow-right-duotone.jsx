import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oozgcpf-n.css';
import '../../css/k/kr2yck1he.css';
import '../../css/p/p3poopb-f.css';
import '../../css/w/w1g7mvbrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oozgcpf-n"/><path class="kr2yck1he"/><path class="p3poopb-f"/><path class="w1g7mvbrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-arrow-right-duotone"} {...others} />);
}

export default Component;
