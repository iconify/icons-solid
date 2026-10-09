import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xk6drtbrj.css';
import '../../css/t/t2iyet0dj.css';
import '../../css/g/ga8o6nb9m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xk6drtbrj"/><path class="t2iyet0dj"/><path class="ga8o6nb9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-left-right-20-bold"} {...others} />);
}

export default Component;
