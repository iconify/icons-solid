import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lv376j6xi.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="lv376j6xi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:mail-send-email-message-circle-remix"} {...others} />);
}

export default Component;
