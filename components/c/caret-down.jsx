import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq0_qkw9t.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gq0_qkw9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:caret-down"} {...others} />);
}

export default Component;
