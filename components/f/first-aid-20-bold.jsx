import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0m9rc9my.css';
import '../../css/o/o2332zble.css';
import '../../css/k/kg73c9ijz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j0m9rc9my"/><path class="o2332zble"/><path class="kg73c9ijz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:first-aid-20-bold"} {...others} />);
}

export default Component;
