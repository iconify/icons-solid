import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-wcb8bfh.css';
import '../../css/i/iuu9occ8e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a-wcb8bfh"/><path class="iuu9occ8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-price-20-bold"} {...others} />);
}

export default Component;
