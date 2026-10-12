import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ugryot79h.css';
import '../../css/s/sxlzwnbkm.css';
import '../../css/w/wj1uu9bbx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ugryot79h"/><path class="sxlzwnbkm"/><path class="wj1uu9bbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:briefcase-conveyor-belt-duotone"} {...others} />);
}

export default Component;
