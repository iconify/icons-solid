import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwk4867sm.css';
import '../../css/n/n7yph_i7l.css';
import '../../css/q/qr-5js_2c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mwk4867sm"/><path class="n7yph_i7l"/><path class="qr-5js_2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-kchat-dark"} {...others} />);
}

export default Component;
