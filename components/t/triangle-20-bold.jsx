import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fyy81ebvu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fyy81ebvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:triangle-20-bold"} {...others} />);
}

export default Component;
