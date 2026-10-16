import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxz-0ibrd.css';
import '../../css/a/aycw-jbph.css';
import '../../css/j/jeyqzjnhx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oxz-0ibrd"/><path class="aycw-jbph"/><path class="jeyqzjnhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:home-battery-alert-20-bold"} {...others} />);
}

export default Component;
