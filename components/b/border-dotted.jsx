import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft7gzcdje.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ft7gzcdje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:border-dotted"} {...others} />);
}

export default Component;
