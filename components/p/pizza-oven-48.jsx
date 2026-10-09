import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbhk_r89i.css';
import '../../css/l/l4lrodbjn.css';
import '../../css/z/zksetoblz.css';
import '../../css/i/ir3gzs0nv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sbhk_r89i"/><path class="l4lrodbjn"/><path class="zksetoblz"/><path class="ir3gzs0nv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pizza-oven-48"} {...others} />);
}

export default Component;
