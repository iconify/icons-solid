import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5la8q4rg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="y5la8q4rg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:crosshair-1"} {...others} />);
}

export default Component;
