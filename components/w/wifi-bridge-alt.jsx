import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1o5-ybgl.css';
import '../../css/c/cr1pj8fpu.css';
import '../../css/m/mh4pb4b4l.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="i1o5-ybgl"/><path class="cr1pj8fpu"/><path class="mh4pb4b4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:wifi-bridge-alt"} {...others} />);
}

export default Component;
