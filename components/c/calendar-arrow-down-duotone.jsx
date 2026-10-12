import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ftpujxbdo.css';
import '../../css/u/u_-wtlw1c.css';
import '../../css/p/p3poopb-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ftpujxbdo"/><path class="u_-wtlw1c"/><path class="p3poopb-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-arrow-down-duotone"} {...others} />);
}

export default Component;
