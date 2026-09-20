import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsu17feyn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lsu17feyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:mobile-phone-with-keypad-and-antenna-beside-mobile-phone-with-touchscreen-and-antenna"} {...others} />);
}

export default Component;
