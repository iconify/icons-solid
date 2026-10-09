import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5xf0acau.css';
import '../../css/k/kf6co47ks.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y5xf0acau"/><path class="kf6co47ks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-left-down-48"} {...others} />);
}

export default Component;
