import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9w-xz9jc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="r9w-xz9jc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:magic-wand"} {...others} />);
}

export default Component;
