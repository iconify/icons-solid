import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlsrljbwz.css';
import '../../css/c/cdtctobwy.css';
import '../../css/s/spr4jhb3d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rlsrljbwz"/><path class="cdtctobwy"/><path class="spr4jhb3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cybersecurity-48"} {...others} />);
}

export default Component;
