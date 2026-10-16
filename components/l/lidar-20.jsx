import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqxdqfbra.css';
import '../../css/w/wwy3pgbwd.css';
import '../../css/e/e3z_k3b8k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sqxdqfbra"/><path class="wwy3pgbwd"/><path class="e3z_k3b8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lidar-20"} {...others} />);
}

export default Component;
