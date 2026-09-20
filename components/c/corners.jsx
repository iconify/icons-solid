import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9rz68q5y.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="w9rz68q5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:corners"} {...others} />);
}

export default Component;
