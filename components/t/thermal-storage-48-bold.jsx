import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9eadlwgv.css';
import '../../css/q/q_m60h3vf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i9eadlwgv"/><path class="q_m60h3vf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermal-storage-48-bold"} {...others} />);
}

export default Component;
