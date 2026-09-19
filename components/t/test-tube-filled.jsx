import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckad6q9jx.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="ckad6q9jx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:test-tube-filled"} {...others} />);
}

export default Component;
