import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7n9xvbey.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="r7n9xvbey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:rotate-counterclockwise-filled"} {...others} />);
}

export default Component;
