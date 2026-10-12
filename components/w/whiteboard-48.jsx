import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5jsvcc-v.css';
import '../../css/g/gszf-lm8j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f5jsvcc-v"/><path class="gszf-lm8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:whiteboard-48"} {...others} />);
}

export default Component;
