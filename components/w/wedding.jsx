import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zl4q5n-pn.css';
import '../../css/r/rqp0bmisa.css';
import '../../css/q/qkxwkckrd.css';
import '../../css/e/e9oggybki.css';
import '../../css/d/dzaiwkylz.css';
import '../../css/t/tsbisfbah.css';
import '../../css/n/n_0ez2xmr.css';
import '../../css/f/ftvedej8i.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="zl4q5n-pn"/><path class="rqp0bmisa"/><path class="qkxwkckrd"/><path class="e9oggybki"/><path class="dzaiwkylz"/><path class="tsbisfbah"/><path class="n_0ez2xmr"/><path class="ftvedej8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:wedding"} {...others} />);
}

export default Component;
