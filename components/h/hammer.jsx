import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yipqe24sd.css';
import '../../css/d/dp--qdbnh.css';
import '../../css/p/pj_w4ob_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yipqe24sd"/><path class="dp--qdbnh"/><path class="pj_w4ob_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hammer"} {...others} />);
}

export default Component;
