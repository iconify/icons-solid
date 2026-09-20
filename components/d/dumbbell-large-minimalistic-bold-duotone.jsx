import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r-67hpbue.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/c/c9g5684_i.css';
import '../../css/p/p-jxp4bsr.css';
import '../../css/j/jauoic6ia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r-67hpbue"/><g class="mc2zb0bvp"><path class="c9g5684_i"/><path class="p-jxp4bsr"/><path class="jauoic6ia"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbell-large-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
