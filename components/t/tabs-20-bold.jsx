import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_a0sffvb.css';
import '../../css/f/fan1dzboe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b_a0sffvb"/><path class="fan1dzboe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tabs-20-bold"} {...others} />);
}

export default Component;
