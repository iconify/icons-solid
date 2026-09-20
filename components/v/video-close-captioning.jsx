import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kmhgemb1s.css';
import '../../css/q/qgmwe9b7q.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="kmhgemb1s"/><path class="qgmwe9b7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:video-close-captioning"} {...others} />);
}

export default Component;
