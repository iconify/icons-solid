import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjuum2lkt.css';
import '../../css/w/w6t3ij_cp.css';
import '../../css/y/y8tz8cb_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rjuum2lkt"/><path class="w6t3ij_cp"/><path class="y8tz8cb_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:martini-duotone"} {...others} />);
}

export default Component;
