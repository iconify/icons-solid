import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-g5z-w8l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-g5z-w8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-message-alt-edit"} {...others} />);
}

export default Component;
