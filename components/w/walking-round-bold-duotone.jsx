import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wmw3j9v_l.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/e/ed016ybbg.css';
import '../../css/y/yswxml9zk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wmw3j9v_l"/><g class="mc2zb0bvp"><path class="ed016ybbg"/><path class="yswxml9zk"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:walking-round-bold-duotone"} {...others} />);
}

export default Component;
