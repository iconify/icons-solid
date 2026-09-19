import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cv7n29b5t.css';
import '../../css/i/i38uy4b8i.css';
import '../../css/a/avix9wb6i.css';
import '../../css/l/l4vx84bjp.css';
import '../../css/h/ho45usbji.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cv7n29b5t"/><path class="i38uy4b8i"/><path class="avix9wb6i"/><path class="l4vx84bjp"/><path class="ho45usbji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:tulip"} {...others} />);
}

export default Component;
