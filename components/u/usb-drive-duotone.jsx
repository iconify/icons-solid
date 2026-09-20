import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g1tghbccd.css';
import '../../css/o/ox-5v-b6k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="g1tghbccd"/><path clip-rule="evenodd" class="ox-5v-b6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:usb-drive-duotone"} {...others} />);
}

export default Component;
