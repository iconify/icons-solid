import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rv2g9obeh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rv2g9obeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:exclamation-outline"} {...others} />);
}

export default Component;
