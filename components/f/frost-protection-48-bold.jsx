import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4447fbqf.css';
import '../../css/u/u7ss4zbra.css';
import '../../css/o/otee45b1n.css';
import '../../css/h/hyo77xj8y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w4447fbqf"/><path class="u7ss4zbra"/><path class="otee45b1n"/><path class="hyo77xj8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:frost-protection-48-bold"} {...others} />);
}

export default Component;
