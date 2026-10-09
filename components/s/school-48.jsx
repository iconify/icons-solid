import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu_-hqblm.css';
import '../../css/l/lx1bjzy7s.css';
import '../../css/r/rkhp_zb5l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mu_-hqblm"/><path class="lx1bjzy7s"/><path class="rkhp_zb5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:school-48"} {...others} />);
}

export default Component;
