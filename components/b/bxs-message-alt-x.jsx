import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9_0x6oon.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d9_0x6oon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-message-alt-x"} {...others} />);
}

export default Component;
