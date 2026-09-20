import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u4jda1b4y.css';
import '../../css/c/cdl2a1bbr.css';
import '../../css/r/rqfiu97ew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="u4jda1b4y"/><path class="cdl2a1bbr"/><path clip-rule="evenodd" class="rqfiu97ew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:routing-2-outline"} {...others} />);
}

export default Component;
