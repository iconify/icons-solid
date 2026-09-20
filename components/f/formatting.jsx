import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akk0b-1ak.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="akk0b-1ak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:formatting"} {...others} />);
}

export default Component;
