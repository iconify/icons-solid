import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sq7nmmbkp.css';
import '../../css/x/xnsv0vw4l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="sq7nmmbkp"/><path class="xnsv0vw4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-chat-logo"} {...others} />);
}

export default Component;
