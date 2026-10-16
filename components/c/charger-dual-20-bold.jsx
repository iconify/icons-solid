import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-b0mlbul.css';
import '../../css/i/i5s91diaq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q-b0mlbul"/><path class="i5s91diaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-dual-20-bold"} {...others} />);
}

export default Component;
