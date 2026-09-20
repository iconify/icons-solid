import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uiiytincm.css';
import '../../css/g/g8ll7b7pf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uiiytincm"/><circle class="g8ll7b7pf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:user-chat-ltr"} {...others} />);
}

export default Component;
