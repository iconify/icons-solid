import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_lxouqgq.css';
import '../../css/i/iodabfbsu.css';
import '../../css/e/ek5zb4bdq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h_lxouqgq"/><path class="iodabfbsu"/><path clip-rule="evenodd" class="ek5zb4bdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-right-bold-duotone"} {...others} />);
}

export default Component;
