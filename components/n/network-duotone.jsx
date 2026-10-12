import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztls5r9fg.css';
import '../../css/m/m3to96b8r.css';
import '../../css/v/vr5_g0bmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ztls5r9fg"/><path class="m3to96b8r"/><path class="vr5_g0bmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:network-duotone"} {...others} />);
}

export default Component;
