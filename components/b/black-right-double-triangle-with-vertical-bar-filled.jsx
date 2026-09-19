import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9eomtbce.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="b9eomtbce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:black-right-double-triangle-with-vertical-bar-filled"} {...others} />);
}

export default Component;
