import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cbrbghbqs.css';
import '../../css/s/sdqr8yk5x.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="cbrbghbqs"/><path class="sdqr8yk5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:webcam-video-off"} {...others} />);
}

export default Component;
