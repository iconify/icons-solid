import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbi1web-l.css';
import '../../css/c/c8qbtokgo.css';
import '../../css/l/l-0qr7dzn.css';
import '../../css/q/qvmzwopuc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wbi1web-l"/><path class="c8qbtokgo"/><path class="l-0qr7dzn"/><path class="qvmzwopuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:envelopewithlightning"} {...others} />);
}

export default Component;
