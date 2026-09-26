import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xm8h3ub8g.css';
import '../../css/n/ntvg8ebwg.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/m/m2-on0bla.css';
import '../../css/v/vipv0t5kp.css';
import '../../css/m/mswbmfbld.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xm8h3ub8g"/><path class="ntvg8ebwg"/><g class="mc2zb0bvp"><path class="m2-on0bla"/><path class="vipv0t5kp"/><path class="mswbmfbld"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-left-right-ellipsis-bold-duotone"} {...others} />);
}

export default Component;
