import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/peu1myr5j.css';
import '../../css/i/injsvdbgs.css';
import '../../css/j/j39cvqb6a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="peu1myr5j"/><path class="injsvdbgs"/><path class="j39cvqb6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stopwatch-20-bold"} {...others} />);
}

export default Component;
