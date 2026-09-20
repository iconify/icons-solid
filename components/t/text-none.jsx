import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_4amlb7l.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="f_4amlb7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:text-none"} {...others} />);
}

export default Component;
