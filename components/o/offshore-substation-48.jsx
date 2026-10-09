import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy4vy0gsk.css';
import '../../css/v/vxoaqbnzd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sy4vy0gsk"/><path class="vxoaqbnzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:offshore-substation-48"} {...others} />);
}

export default Component;
