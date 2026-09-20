import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qpnl_kb9p.css';
import '../../css/h/hwywffbxj.css';
import '../../css/o/op-uyebei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qpnl_kb9p"/><path clip-rule="evenodd" class="hwywffbxj"/><path class="op-uyebei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:camera-add-bold-duotone"} {...others} />);
}

export default Component;
