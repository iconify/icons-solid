import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2so68b_t.css';
import '../../css/y/ydx5-5bqk.css';
import '../../css/t/tzhs9kbdj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i2so68b_t"/><path class="ydx5-5bqk"/><path class="tzhs9kbdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:salt-cavern-48"} {...others} />);
}

export default Component;
