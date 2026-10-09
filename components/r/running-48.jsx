import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4s6aob2m.css';
import '../../css/n/n0xyitehn.css';
import '../../css/w/w3e274hyt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s4s6aob2m"/><path class="n0xyitehn"/><path class="w3e274hyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:running-48"} {...others} />);
}

export default Component;
