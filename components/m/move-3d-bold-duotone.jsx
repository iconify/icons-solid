import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cc5sghbks.css';
import '../../css/q/qr17esspr.css';
import '../../css/p/pj6r6abuc.css';
import '../../css/c/cyvlt_bvr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cc5sghbks"/><path class="qr17esspr"/><path class="pj6r6abuc"/><path class="cyvlt_bvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-3d-bold-duotone"} {...others} />);
}

export default Component;
