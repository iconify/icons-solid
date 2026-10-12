import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v0ktk-1-q.css';
import '../../css/n/nw4f7abft.css';
import '../../css/o/ol-wxwb8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v0ktk-1-q"/><path class="nw4f7abft"/><path class="ol-wxwb8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:diamond-percent-duotone"} {...others} />);
}

export default Component;
