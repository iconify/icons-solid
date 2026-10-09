import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3i5l3b6q.css';
import '../../css/t/to0kfkbmi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j3i5l3b6q"/><path class="to0kfkbmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clipboard-check-20"} {...others} />);
}

export default Component;
