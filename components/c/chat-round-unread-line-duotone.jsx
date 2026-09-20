import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f8yqsxb0s.css';
import '../../css/c/cebng3y4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle transform="matrix(-1 0 0 1 22 2)" class="f8yqsxb0s"/><path class="cebng3y4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-unread-line-duotone"} {...others} />);
}

export default Component;
