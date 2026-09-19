import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s52488q7t.css';
import '../../css/d/d58ezqogs.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="s52488q7t"/><path class="d58ezqogs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:virtual-desktop"} {...others} />);
}

export default Component;
