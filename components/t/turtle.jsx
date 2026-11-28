import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gtyxdbbya.css';
import '../../css/r/rmjcikbzx.css';
import '../../css/m/m7oicvota.css';
import '../../css/s/sp26dzxfl.css';
import '../../css/n/n2_41ebpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gtyxdbbya"/><path class="rmjcikbzx"/><path class="m7oicvota"/><path class="sp26dzxfl"/><path class="n2_41ebpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:turtle"} {...others} />);
}

export default Component;
