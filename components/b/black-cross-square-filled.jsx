import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5tnxjw_e.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="q5tnxjw_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:black-cross-square-filled"} {...others} />);
}

export default Component;
