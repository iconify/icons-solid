import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g28k-c3rd.css';
import '../../css/y/yocg4b9gh.css';
import '../../css/x/xw3d96bat.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="g28k-c3rd"/><rect class="yocg4b9gh"/><circle class="xw3d96bat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:image-camera-tripod-tripod-photos-picture-camera-photography-photo-pictures"} {...others} />);
}

export default Component;
