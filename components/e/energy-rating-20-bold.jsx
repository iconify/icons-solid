import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9l9ao62c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n9l9ao62c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-rating-20-bold"} {...others} />);
}

export default Component;
