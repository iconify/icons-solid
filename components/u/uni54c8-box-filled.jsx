import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdqkzx6-c.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="xdqkzx6-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:uni54c8-box-filled"} {...others} />);
}

export default Component;
