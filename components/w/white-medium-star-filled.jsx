import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hx6x8mb8q.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="hx6x8mb8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:white-medium-star-filled"} {...others} />);
}

export default Component;
