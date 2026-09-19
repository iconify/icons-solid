import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5q4pvb7e.css';

const viewBox = {"width":384,"height":408};
const content = `<path class="c5q4pvb7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:mic-off"} {...others} />);
}

export default Component;
