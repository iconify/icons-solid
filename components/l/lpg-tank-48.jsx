import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5bjig3qg.css';
import '../../css/w/w9ts85b5q.css';
import '../../css/o/of5hjbcyj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c5bjig3qg"/><path class="w9ts85b5q"/><path class="of5hjbcyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lpg-tank-48"} {...others} />);
}

export default Component;
