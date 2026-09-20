import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3bqa_bks.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b3bqa_bks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:mail-send-email-message-solid"} {...others} />);
}

export default Component;
