import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmtrv_blu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wmtrv_blu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:message-arrow-up-solid"} {...others} />);
}

export default Component;
