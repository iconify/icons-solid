import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rjd0kis-e.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rjd0kis-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:mixer-vertical"} {...others} />);
}

export default Component;
