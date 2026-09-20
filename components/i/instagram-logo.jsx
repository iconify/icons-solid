import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2zekxdxt.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="v2zekxdxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:instagram-logo"} {...others} />);
}

export default Component;
