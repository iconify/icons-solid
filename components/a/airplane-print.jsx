import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q527rfbah.css';
import '../../css/r/rcld7rbta.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="q527rfbah"/><path clip-rule="evenodd" class="rcld7rbta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:airplane-print"} {...others} />);
}

export default Component;
