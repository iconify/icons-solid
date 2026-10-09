import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ce0984b4t.css';
import '../../css/t/tetsfk0bz.css';
import '../../css/w/wl07m1b3t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ce0984b4t"/><path class="tetsfk0bz"/><path class="wl07m1b3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydraulic-press-48"} {...others} />);
}

export default Component;
