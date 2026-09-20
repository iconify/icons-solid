import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cxs5opefl.css';
import '../../css/n/nz68zmbgk.css';
import '../../css/x/x26m7ubbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cxs5opefl"/><path class="nz68zmbgk"/><path class="x26m7ubbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quit-pip-bold-duotone"} {...others} />);
}

export default Component;
