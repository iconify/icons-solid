import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj9ruis6z.css';
import '../../css/j/j1qqfackf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fj9ruis6z"/><path class="j1qqfackf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kayak-48"} {...others} />);
}

export default Component;
