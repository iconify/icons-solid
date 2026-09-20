import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fvyxm7bvs.css';
import '../../css/s/sp1mbgw9c.css';
import '../../css/e/e-9alfbmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="fvyxm7bvs"/><path class="sp1mbgw9c"/><path class="e-9alfbmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:baby-2-girl-sharp-duotone"} {...others} />);
}

export default Component;
