import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kn0bhdb6n.css';
import '../../css/r/rwi-8nm7s.css';
import '../../css/t/t97869bya.css';
import '../../css/y/yd551hbjq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kn0bhdb6n"/><path clip-rule="evenodd" class="rwi-8nm7s"/><path class="t97869bya"/><path clip-rule="evenodd" class="yd551hbjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:mobile-phone-camera-flat"} {...others} />);
}

export default Component;
