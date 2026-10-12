import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfgpgo98v.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/o/omi4i4cer.css';
import '../../css/d/dztgjdbnh.css';
import '../../css/v/vp15k3-sw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yfgpgo98v"/><path class="y8ppixbeg"/><path class="omi4i4cer"/><path class="dztgjdbnh"/><path class="vp15k3-sw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-video-camera-duotone"} {...others} />);
}

export default Component;
