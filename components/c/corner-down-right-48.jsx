import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0140xb6z.css';
import '../../css/v/v-c6wh_lx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t0140xb6z"/><path class="v-c6wh_lx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-down-right-48"} {...others} />);
}

export default Component;
