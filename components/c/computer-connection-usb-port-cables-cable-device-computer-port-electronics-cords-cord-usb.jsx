import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/ftzocbbpo.css';
import '../../css/a/acfxm9boj.css';
import '../../css/c/clvaxwg5s.css';
import '../../css/f/fesp_3bpy.css';
import '../../css/t/thn-uns6s.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="ftzocbbpo"/><path class="acfxm9boj"/><circle class="clvaxwg5s"/><path class="fesp_3bpy"/><circle class="thn-uns6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-connection-usb-port-cables-cable-device-computer-port-electronics-cords-cord-usb"} {...others} />);
}

export default Component;
