import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/siuiveb8v.css';
import '../../css/u/uz5vufbgf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="siuiveb8v"/><path class="uz5vufbgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:alert-48"} {...others} />);
}

export default Component;
