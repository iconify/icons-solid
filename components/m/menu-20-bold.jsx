import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7tqf0b3x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g7tqf0b3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:menu-20-bold"} {...others} />);
}

export default Component;
