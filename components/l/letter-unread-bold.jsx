import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybu95d8og.css';
import '../../css/z/zh2x-vuty.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ybu95d8og"/><path clip-rule="evenodd" class="zh2x-vuty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:letter-unread-bold"} {...others} />);
}

export default Component;
