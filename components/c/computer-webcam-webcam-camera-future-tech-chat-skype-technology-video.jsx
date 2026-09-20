import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qidn0kbwc.css';
import '../../css/z/zho1g5b6o.css';
import '../../css/v/v-dgwpbfs.css';
import '../../css/t/tzdh63mvr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="qidn0kbwc"/><path class="zho1g5b6o"/><circle class="v-dgwpbfs"/><circle class="tzdh63mvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-webcam-webcam-camera-future-tech-chat-skype-technology-video"} {...others} />);
}

export default Component;
