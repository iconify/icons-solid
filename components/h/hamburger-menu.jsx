import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/th44pbcmr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="th44pbcmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:hamburger-menu"} {...others} />);
}

export default Component;
