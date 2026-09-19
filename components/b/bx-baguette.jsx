import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/efz1s0b4u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="efz1s0b4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-baguette"} {...others} />);
}

export default Component;
