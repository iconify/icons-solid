import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l8n-98b4b.css';
import '../../css/u/u_b4w6bhu.css';
import '../../css/y/ylukogwll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l8n-98b4b"/><path clip-rule="evenodd" class="u_b4w6bhu"/><path class="ylukogwll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bus-duotone"} {...others} />);
}

export default Component;
