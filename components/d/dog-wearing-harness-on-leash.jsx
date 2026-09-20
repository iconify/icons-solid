import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8x1_xoez.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="l8x1_xoez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:dog-wearing-harness-on-leash"} {...others} />);
}

export default Component;
