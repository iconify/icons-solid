import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/shwsux49d.css';
import '../../css/d/dw3dc8bje.css';
import '../../css/w/wjshhri2h.css';
import '../../css/e/ev13-2x6v.css';
import '../../css/m/m7v4xqvbw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="shwsux49d"/><path class="dw3dc8bje"/><path class="wjshhri2h"/><path class="ev13-2x6v"/><path class="m7v4xqvbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-mic-off"} {...others} />);
}

export default Component;
