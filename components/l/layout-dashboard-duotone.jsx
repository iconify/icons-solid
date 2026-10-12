import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pu8xpsbae.css';
import '../../css/w/w9umqkvzs.css';
import '../../css/x/xk4e-oxlk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pu8xpsbae"/><path class="w9umqkvzs"/><path class="xk4e-oxlk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:layout-dashboard-duotone"} {...others} />);
}

export default Component;
