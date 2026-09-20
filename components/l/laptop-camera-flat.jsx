import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rr-cgqdss.css';
import '../../css/j/jvtpken9f.css';
import '../../css/k/kx89ncxce.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rr-cgqdss"/><path class="jvtpken9f"/><path clip-rule="evenodd" class="kx89ncxce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:laptop-camera-flat"} {...others} />);
}

export default Component;
