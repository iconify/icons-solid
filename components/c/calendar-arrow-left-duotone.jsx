import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rminvdhlv.css';
import '../../css/p/p3poopb-f.css';
import '../../css/l/l7rc3p0id.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rminvdhlv"/><path class="p3poopb-f"/><path class="l7rc3p0id"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-arrow-left-duotone"} {...others} />);
}

export default Component;
