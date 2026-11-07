import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3dfu3brp.css';
import '../../css/q/qfj7523-i.css';
import '../../css/h/h_vbtsb7e.css';
import '../../css/x/xy6mmpbpv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k3dfu3brp"/><path class="qfj7523-i"/><path class="h_vbtsb7e"/><path class="xy6mmpbpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-home-angle-outline"} {...others} />);
}

export default Component;
