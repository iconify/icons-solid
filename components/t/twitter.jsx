import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/youkbbcbw.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="cls-1 youkbbcbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:twitter"} {...others} />);
}

export default Component;
