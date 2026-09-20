import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ji9na9rtr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ji9na9rtr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:bookmark"} {...others} />);
}

export default Component;
