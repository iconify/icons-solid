import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0m45uarn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="c0m45uarn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:align-center-vertically"} {...others} />);
}

export default Component;
