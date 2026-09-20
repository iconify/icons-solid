import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iinq4smdg.css';
import '../../css/n/n29lhivfr.css';
import '../../css/c/cdokmsw5o.css';
import '../../css/j/jolhxob2t.css';
import '../../css/s/sc4doe0dv.css';
import '../../css/b/bf8cleb5t.css';
import '../../css/g/g1998r7tb.css';
import '../../css/b/brtta0bjp.css';
import '../../css/j/jlpj18b4l.css';
import '../../css/u/ui_8ucbwy.css';
import '../../css/k/kbn0_rk7v.css';
import '../../css/v/v-w478b2b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iinq4smdg"/><path class="n29lhivfr"/><path class="cdokmsw5o"/><path class="jolhxob2t"/><path class="sc4doe0dv"/><path class="bf8cleb5t"/><path class="g1998r7tb"/><path class="brtta0bjp"/><path class="jlpj18b4l"/><path class="ui_8ucbwy"/><path class="kbn0_rk7v"/><path class="v-w478b2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:internlm"} {...others} />);
}

export default Component;
