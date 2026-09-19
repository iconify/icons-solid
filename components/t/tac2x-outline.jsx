import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vvn4iv5gn.css';
import '../../css/x/xj__jfbkl.css';
import '../../css/q/qh4vdvbdt.css';
import '../../css/t/tnpn9fbkr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="vvn4iv5gn"/><path clip-rule="evenodd" class="xj__jfbkl"/><path clip-rule="evenodd" class="qh4vdvbdt"/><path class="tnpn9fbkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:tac2x-outline"} {...others} />);
}

export default Component;
