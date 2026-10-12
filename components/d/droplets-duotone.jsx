import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aprqnrbwu.css';
import '../../css/w/w0ez89ben.css';
import '../../css/r/refb60b5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="aprqnrbwu"/><path class="w0ez89ben"/><path class="refb60b5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:droplets-duotone"} {...others} />);
}

export default Component;
