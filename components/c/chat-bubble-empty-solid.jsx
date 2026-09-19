import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbyvz2pfm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lbyvz2pfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:chat-bubble-empty-solid"} {...others} />);
}

export default Component;
