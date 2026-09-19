import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kiyaiv4lr.css';
import '../../css/t/tum1zw32k.css';
import '../../css/e/ech26lbaz.css';
import '../../css/p/pi4tf0brq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kiyaiv4lr"/><path class="tum1zw32k"/><path class="ech26lbaz"/><path class="pi4tf0brq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:wiredkeyboard"} {...others} />);
}

export default Component;
