import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9uhwm-oy.css';
import '../../css/p/p6h1q_4_y.css';
import '../../css/w/wweom8b5r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a9uhwm-oy"/><path class="p6h1q_4_y"/><path class="wweom8b5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-lock-48"} {...others} />);
}

export default Component;
