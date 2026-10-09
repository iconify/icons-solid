import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ia51n3hgg.css';
import '../../css/t/tv9ekks-k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ia51n3hgg"/><path class="tv9ekks-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:laundry-basket-20-bold"} {...others} />);
}

export default Component;
