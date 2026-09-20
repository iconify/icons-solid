import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gs_mr7bpp.css';
import '../../css/h/h9uq00g_q.css';
import '../../css/q/qkowx-d8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gs_mr7bpp"/><path class="h9uq00g_q"/><path class="qkowx-d8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-left-bold"} {...others} />);
}

export default Component;
