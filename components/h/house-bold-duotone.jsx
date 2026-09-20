import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ayrwu2bcl.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/b/bp5vlbc9d.css';
import '../../css/g/gam1sgbnn.css';
import '../../css/x/x047q_bxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ayrwu2bcl"/><g class="mc2zb0bvp"><path class="bp5vlbc9d"/><path class="gam1sgbnn"/><path class="x047q_bxu"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:house-bold-duotone"} {...others} />);
}

export default Component;
