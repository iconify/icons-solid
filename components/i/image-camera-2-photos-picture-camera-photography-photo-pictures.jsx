import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s64_qjh3v.css';
import '../../css/a/a_frtcbae.css';
import '../../css/y/yuetoib9q.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="s64_qjh3v"/><circle class="a_frtcbae"/><path class="yuetoib9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:image-camera-2-photos-picture-camera-photography-photo-pictures"} {...others} />);
}

export default Component;
