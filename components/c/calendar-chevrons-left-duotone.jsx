import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t713w4bax.css';
import '../../css/d/d51rrrlde.css';
import '../../css/p/p3poopb-f.css';
import '../../css/i/iom5okjco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t713w4bax"/><path class="d51rrrlde"/><path class="p3poopb-f"/><path class="iom5okjco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-chevrons-left-duotone"} {...others} />);
}

export default Component;
