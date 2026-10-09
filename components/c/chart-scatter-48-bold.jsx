import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y--jnj11k.css';
import '../../css/k/kqp7h7bfm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y--jnj11k"/><path class="kqp7h7bfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-scatter-48-bold"} {...others} />);
}

export default Component;
