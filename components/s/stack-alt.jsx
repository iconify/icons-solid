import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-qq7fbyk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l-qq7fbyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:stack-alt"} {...others} />);
}

export default Component;
