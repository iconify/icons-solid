import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kuuho-btb.css';
import '../../css/r/ruvbxe6ge.css';
import '../../css/u/upnry9bsk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kuuho-btb wm-k"/><path class="ruvbxe6ge wm-shine"/><path class="upnry9bsk wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:avatar-panda"} {...others} />);
}

export default Component;
