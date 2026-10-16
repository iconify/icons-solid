import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nw67kyv5m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nw67kyv5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chevrons-up-down-48"} {...others} />);
}

export default Component;
