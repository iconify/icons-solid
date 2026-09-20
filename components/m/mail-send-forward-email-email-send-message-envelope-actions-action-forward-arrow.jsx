import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtzh11bxx.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rtzh11bxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:mail-send-forward-email-email-send-message-envelope-actions-action-forward-arrow"} {...others} />);
}

export default Component;
