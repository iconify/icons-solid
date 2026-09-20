import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ky5bn3bkf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ky5bn3bkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-hangouts-chat-logo-block"} {...others} />);
}

export default Component;
