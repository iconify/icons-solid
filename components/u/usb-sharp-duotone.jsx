import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/k3drzc9fl.css';
import '../../css/y/ylejacb2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="k3drzc9fl"/><path class="ylejacb2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:usb-sharp-duotone"} {...others} />);
}

export default Component;
