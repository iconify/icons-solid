import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/p34tvj1eg.css';
import '../../css/c/c6upwkbge.css';
import '../../css/u/u5618s-wt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="p34tvj1eg"/><path class="c6upwkbge"/><path class="u5618s-wt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:message-sparkles-sharp-duotone"} {...others} />);
}

export default Component;
