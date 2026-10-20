import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnovs-bfk.css';
import '../../css/o/ow9eo7bnj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bnovs-bfk"/><path class="ow9eo7bnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lightbulb-sparkle-20"} {...others} />);
}

export default Component;
