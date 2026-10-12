import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k_94w8q1x.css';
import '../../css/p/p3poopb-f.css';
import '../../css/d/dwta0cbnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k_94w8q1x"/><path class="p3poopb-f"/><path class="dwta0cbnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-plus-2-duotone"} {...others} />);
}

export default Component;
