import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a57li6b2p.css';
import '../../css/a/a_tlqyzpa.css';
import '../../css/w/wlxzg2_7b.css';
import '../../css/k/kd6wg5bfv.css';
import '../../css/f/f9elsioiq.css';
import '../../css/k/kzgvokbvz.css';
import '../../css/q/quez-ilvm.css';
import '../../css/d/dajcwj8in.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a57li6b2p"/><path class="a_tlqyzpa"/><path class="wlxzg2_7b"/><path class="kd6wg5bfv"/><path class="f9elsioiq"/><path class="kzgvokbvz"/><path class="quez-ilvm"/><path class="dajcwj8in"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:openmailboxraised"} {...others} />);
}

export default Component;
