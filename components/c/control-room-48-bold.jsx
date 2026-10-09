import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qeucaqz1x.css';
import '../../css/o/o3-2b8bgp.css';
import '../../css/w/wyrzc4bau.css';
import '../../css/k/k0x9-5bje.css';
import '../../css/r/rkge1_woi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qeucaqz1x"/><path class="o3-2b8bgp"/><path class="wyrzc4bau"/><path class="k0x9-5bje"/><path class="rkge1_woi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:control-room-48-bold"} {...others} />);
}

export default Component;
