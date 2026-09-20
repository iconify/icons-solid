import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xyx0rojia.css';
import '../../css/v/vwut17bll.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="xyx0rojia"/><circle class="vwut17bll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:image-camera-setting-pin-photos-camera-map-photography-pictures-maps-settings-pin-photo"} {...others} />);
}

export default Component;
