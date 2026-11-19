import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1aembgqz.css';
import '../../css/t/thhwdjbwo.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="c1aembgqz"/><path class="thhwdjbwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:qwen"} {...others} />);
}

export default Component;
