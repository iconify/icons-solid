import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1y7rt3td.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l1y7rt3td"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:stopwatch"} {...others} />);
}

export default Component;
