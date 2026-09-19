import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xoj2elb8b.css';
import '../../css/g/g_k_kr9gw.css';
import '../../css/i/i__dg_qho.css';
import '../../css/j/jfvi6mjut.css';
import '../../css/h/hs_4g2ita.css';
import '../../css/l/lvlpeacto.css';
import '../../css/j/ji0-_mvfl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="xoj2elb8b"/><path clip-rule="evenodd" class="g_k_kr9gw"/><path class="i__dg_qho"/><path clip-rule="evenodd" class="jfvi6mjut"/><path class="hs_4g2ita"/><path clip-rule="evenodd" class="lvlpeacto"/><path class="ji0-_mvfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:plug-1"} {...others} />);
}

export default Component;
