import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/se0r9bc9k.css';
import '../../css/g/gpjktbcrx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="se0r9bc9k"/><path clip-rule="evenodd" class="gpjktbcrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:crypto-chat-mobile-phone-bold"} {...others} />);
}

export default Component;
