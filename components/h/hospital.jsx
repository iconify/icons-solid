import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xiaq5cb8j.css';
import '../../css/k/kbvlyv6-c.css';
import '../../css/u/ug76sacem.css';
import '../../css/i/it25fdkkr.css';
import '../../css/s/sdku3xckp.css';
import '../../css/o/oscgefb7t.css';
import '../../css/q/q_p8z2b7n.css';
import '../../css/d/dau0aabzj.css';
import '../../css/k/kd3z4acga.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xiaq5cb8j"/><path class="kbvlyv6-c"/><path class="ug76sacem"/><path class="it25fdkkr"/><path class="sdku3xckp"/><path class="oscgefb7t"/><path class="q_p8z2b7n"/><path class="dau0aabzj"/><path class="kd3z4acga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:hospital"} {...others} />);
}

export default Component;
