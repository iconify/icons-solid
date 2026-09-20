import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iy-cs117v.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="iy-cs117v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:mobile-phone-with-keypad-and-antenna-and-wifi"} {...others} />);
}

export default Component;
