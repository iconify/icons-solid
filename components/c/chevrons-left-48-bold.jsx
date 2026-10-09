import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ka0ey-ttx.css';
import '../../css/u/uclife8yb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ka0ey-ttx"/><path class="uclife8yb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chevrons-left-48-bold"} {...others} />);
}

export default Component;
