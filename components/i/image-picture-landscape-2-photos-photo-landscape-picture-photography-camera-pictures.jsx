import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yph-txb3i.css';
import '../../css/u/uia1vt72p.css';
import '../../css/m/mko8dh4hu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect transform="rotate(180 7 7)" class="yph-txb3i"/><path class="uia1vt72p"/><circle class="mko8dh4hu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:image-picture-landscape-2-photos-photo-landscape-picture-photography-camera-pictures"} {...others} />);
}

export default Component;
