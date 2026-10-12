import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u00_rtbnv.css';
import '../../css/n/n14y29_sm.css';
import '../../css/j/j4y2ez72j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u00_rtbnv"/><path class="n14y29_sm"/><path class="j4y2ez72j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:egg-fried-duotone"} {...others} />);
}

export default Component;
