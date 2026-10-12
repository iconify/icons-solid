import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qy4g72xnx.css';
import '../../css/p/p3poopb-f.css';
import '../../css/h/hxngk6b1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qy4g72xnx"/><path class="p3poopb-f"/><path class="hxngk6b1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-x-2-duotone"} {...others} />);
}

export default Component;
