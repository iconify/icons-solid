import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rnt97vblj.css';
import '../../css/j/j3gq6tqze.css';
import '../../css/b/bnyimgbtl.css';
import '../../css/h/hnn_j_b_b.css';
import '../../css/m/m9-ftrbby.css';
import '../../css/g/g6ca7qbjp.css';
import '../../css/c/cbckit-9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rnt97vblj"/><path class="j3gq6tqze"/><path class="bnyimgbtl"/><path class="hnn_j_b_b"/><path class="m9-ftrbby"/><path class="g6ca7qbjp"/><path class="cbckit-9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gameboy-line-duotone"} {...others} />);
}

export default Component;
