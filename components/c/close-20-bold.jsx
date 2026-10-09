import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ans_9vb2b.css';
import '../../css/a/az1dy05bx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ans_9vb2b"/><path class="az1dy05bx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:close-20-bold"} {...others} />);
}

export default Component;
