import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t8bw_b3sk.css';
import '../../css/s/sxh_y2bfd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="t8bw_b3sk"/><path class="sxh_y2bfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:usb-port"} {...others} />);
}

export default Component;
