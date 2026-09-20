import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qr-_q9brg.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="qr-_q9brg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:menu-hamburger"} {...others} />);
}

export default Component;
