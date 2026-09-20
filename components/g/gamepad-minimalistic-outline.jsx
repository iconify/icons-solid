import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mcicy0-2s.css';
import '../../css/e/euouyhb1v.css';
import '../../css/d/dltz39bdr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mcicy0-2s"/><path class="euouyhb1v"/><path class="dltz39bdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gamepad-minimalistic-outline"} {...others} />);
}

export default Component;
