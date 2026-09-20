import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zizvrx3_l.css';
import '../../css/t/tmbh0_bbb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect transform="rotate(180 5 5)" class="zizvrx3_l"/><path class="tmbh0_bbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:image-photo-polaroid-photos-polaroid-picture-camera-photography-photo-pictures"} {...others} />);
}

export default Component;
