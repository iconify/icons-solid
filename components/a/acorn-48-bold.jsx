import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpblfybed.css';
import '../../css/u/usk21pbsg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tpblfybed"/><path class="usk21pbsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:acorn-48-bold"} {...others} />);
}

export default Component;
