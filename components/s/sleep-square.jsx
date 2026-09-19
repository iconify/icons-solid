import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-8f7s1ry.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="y-8f7s1ry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:sleep-square"} {...others} />);
}

export default Component;
