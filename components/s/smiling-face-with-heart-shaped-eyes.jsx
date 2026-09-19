import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gz9vf6d5q.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="gz9vf6d5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:smiling-face-with-heart-shaped-eyes"} {...others} />);
}

export default Component;
