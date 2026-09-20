import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy_9vu8he.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="jy_9vu8he"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:mail-send-reply-email-reply-message-actions-action-arrow"} {...others} />);
}

export default Component;
