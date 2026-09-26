import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/t/tkmm4m1rs.css';
import '../../css/i/izgpa7bgk.css';
import '../../css/v/v0kewbcow.css';
import '../../css/c/cqnshxblb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="tkmm4m1rs"/><path class="izgpa7bgk"/></g><path class="v0kewbcow"/><path class="cqnshxblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flashlight-bold-duotone"} {...others} />);
}

export default Component;
