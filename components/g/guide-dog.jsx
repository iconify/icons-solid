import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n9shq_b_z.css';
import '../../css/w/wh4jrqbfk.css';
import '../../css/b/bbpzz5-et.css';
import '../../css/u/uyv474l_w.css';
import '../../css/v/v3zhnsb3i.css';
import '../../css/q/q8ghbcchx.css';
import '../../css/o/opoqoxw-y.css';
import '../../css/o/oz1t-zbwq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="n9shq_b_z"/><path class="wh4jrqbfk"/><path class="bbpzz5-et"/><path class="uyv474l_w"/><path class="v3zhnsb3i"/><path class="q8ghbcchx"/><path class="opoqoxw-y"/><path class="oz1t-zbwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:guide-dog"} {...others} />);
}

export default Component;
