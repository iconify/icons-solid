import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h32t530tv.css';
import '../../css/a/arx_6ubnn.css';
import '../../css/k/kfaz2zb8b.css';
import '../../css/o/o0l3pob7d.css';
import '../../css/n/n9cednr3v.css';
import '../../css/s/s4vaaccib.css';
import '../../css/p/pydyrrn1n.css';
import '../../css/r/r0n3l3bph.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h32t530tv"/><path class="arx_6ubnn"/><path class="kfaz2zb8b"/><path class="o0l3pob7d"/><path class="n9cednr3v"/><path class="s4vaaccib"/><path class="pydyrrn1n"/><path class="r0n3l3bph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:grinsweat"} {...others} />);
}

export default Component;
