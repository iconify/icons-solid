import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aivqjwruh.css';
import '../../css/o/oinxi2bcn.css';
import '../../css/k/kp65e56pe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="aivqjwruh"/><path class="oinxi2bcn"/><path class="kp65e56pe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:compost-48-bold"} {...others} />);
}

export default Component;
