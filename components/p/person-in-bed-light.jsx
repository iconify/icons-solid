import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjeh90psp.css';
import '../../css/l/lfl9_1bnq.css';
import '../../css/m/mg7hdvefo.css';
import '../../css/f/fjimhl__y.css';
import '../../css/b/bak3ubkek.css';
import '../../css/n/nuqyaxbhj.css';
import '../../css/p/pfdp9qhfp.css';
import '../../css/j/jgg29sbzl.css';
import '../../css/p/p_rc5jvya.css';
import '../../css/q/q_huuet3v.css';
import '../../css/y/ywf0tfbud.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="bjeh90psp"/><path class="lfl9_1bnq"/><path class="mg7hdvefo"/><path class="fjimhl__y"/><path class="bak3ubkek"/><path class="nuqyaxbhj"/><path class="pfdp9qhfp"/><path class="jgg29sbzl"/><path clip-rule="evenodd" class="p_rc5jvya"/><path class="q_huuet3v"/><path class="ywf0tfbud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:person-in-bed-light"} {...others} />);
}

export default Component;
