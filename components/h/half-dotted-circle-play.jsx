import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ze652fbds.css';
import '../../css/y/yxs6elbre.css';
import '../../css/y/y8-fwxb_s.css';
import '../../css/w/w1ucf4bqs.css';
import '../../css/d/dajh2_jwm.css';
import '../../css/u/ucoeaw5_h.css';
import '../../css/o/otz66mboq.css';
import '../../css/r/r3fwzibme.css';
import '../../css/v/vkmxfdvap.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ze652fbds"/><path class="yxs6elbre"/><circle class="y8-fwxb_s"/><circle class="w1ucf4bqs"/><circle class="dajh2_jwm"/><circle class="ucoeaw5_h"/><circle class="otz66mboq"/><circle class="r3fwzibme"/><circle class="vkmxfdvap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:half-dotted-circle-play"} {...others} />);
}

export default Component;
