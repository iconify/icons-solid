import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v6_r5ub0p.css';
import '../../css/v/v9h7snvir.css';
import '../../css/d/dtw45jbrd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v6_r5ub0p"/><path class="v9h7snvir"/><path class="dtw45jbrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:drill-duotone"} {...others} />);
}

export default Component;
