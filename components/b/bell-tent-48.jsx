import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/meve8lt-m.css';
import '../../css/l/l4lrodbjn.css';
import '../../css/y/ywo35nt_c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="meve8lt-m"/><path class="l4lrodbjn"/><path class="ywo35nt_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bell-tent-48"} {...others} />);
}

export default Component;
