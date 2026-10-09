import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atfdt7ybg.css';
import '../../css/i/ijiizvbfa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="atfdt7ybg"/><path class="ijiizvbfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:toggle-right-20-bold"} {...others} />);
}

export default Component;
