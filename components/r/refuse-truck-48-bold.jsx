import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxrct6bvh.css';
import '../../css/p/pkxeyyb6h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nxrct6bvh"/><path class="pkxeyyb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:refuse-truck-48-bold"} {...others} />);
}

export default Component;
