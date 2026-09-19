import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9dlazb0p.css';
import '../../css/l/lu5-4oist.css';
import '../../css/r/reyjvibzg.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="i9dlazb0p"/><path class="lu5-4oist"/><path class="reyjvibzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:briefcase-medical-duo"} {...others} />);
}

export default Component;
