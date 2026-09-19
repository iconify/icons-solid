import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/p/p_sf63brj.css';
import '../../css/y/y57fjzbtm.css';
import '../../css/g/g9fgs_cad.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="p_sf63brj"/><path class="y57fjzbtm"/><path class="g9fgs_cad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:code"} {...others} />);
}

export default Component;
