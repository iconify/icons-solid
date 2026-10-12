import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s23avd-hl.css';
import '../../css/l/l8dg_3bcm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s23avd-hl"/><path class="l8dg_3bcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clapperboard-48"} {...others} />);
}

export default Component;
