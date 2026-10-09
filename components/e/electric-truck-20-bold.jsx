import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyf71qdqm.css';
import '../../css/p/p3488rbyi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eyf71qdqm"/><path class="p3488rbyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-truck-20-bold"} {...others} />);
}

export default Component;
