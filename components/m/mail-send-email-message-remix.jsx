import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6lk1cg0j.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="y6lk1cg0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:mail-send-email-message-remix"} {...others} />);
}

export default Component;
