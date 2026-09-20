import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j876dm5-v.css';
import '../../css/p/p3g2vwe8s.css';
import '../../css/m/mzaany7vl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j876dm5-v"/><path class="p3g2vwe8s"/><path class="mzaany7vl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:webcam-video-off"} {...others} />);
}

export default Component;
