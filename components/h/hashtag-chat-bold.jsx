import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uu07wd4oe.css';
import '../../css/j/j7xw_esfn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uu07wd4oe"/><path clip-rule="evenodd" class="j7xw_esfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hashtag-chat-bold"} {...others} />);
}

export default Component;
