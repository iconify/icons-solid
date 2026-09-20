import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/e/e2ra9zmqo.css';
import '../../css/f/fedou6bod.css';
import '../../css/u/u8sdsbbhy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="e2ra9zmqo"/><path class="fedou6bod"/></g><path clip-rule="evenodd" class="u8sdsbbhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:routing-3-bold-duotone"} {...others} />);
}

export default Component;
