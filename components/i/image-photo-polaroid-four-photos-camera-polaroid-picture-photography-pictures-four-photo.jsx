import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jivivrbni.css';
import '../../css/y/yes1-1b6c.css';
import '../../css/f/f-bh_mprb.css';
import '../../css/c/c07q9b5pt.css';
import '../../css/r/r7n2ctbvd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="jivivrbni"/><rect class="yes1-1b6c"/><rect class="f-bh_mprb"/><rect class="c07q9b5pt"/><path class="r7n2ctbvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:image-photo-polaroid-four-photos-camera-polaroid-picture-photography-pictures-four-photo"} {...others} />);
}

export default Component;
