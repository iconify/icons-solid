import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8rrb8l5n.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="l8rrb8l5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:watermelon"} {...others} />);
}

export default Component;
