import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ans_9vb2b.css';
import '../../css/x/x-_i1mkli.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ans_9vb2b"/><path class="x-_i1mkli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-down-right-20-bold"} {...others} />);
}

export default Component;
