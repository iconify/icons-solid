import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6q3yrbjc.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="j6q3yrbjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:page-facing-up-filled"} {...others} />);
}

export default Component;
