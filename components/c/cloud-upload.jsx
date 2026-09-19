import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/llc3hsxpl.css';
import '../../css/j/j1alc3bdk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="llc3hsxpl"/><path class="j1alc3bdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cloud-upload"} {...others} />);
}

export default Component;
