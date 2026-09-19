import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b2aybrbvn.css';
import '../../css/w/wli13pbyr.css';
import '../../css/z/zlj6rjbtp.css';
import '../../css/d/d-wq96bph.css';
import '../../css/k/ktb0f8_il.css';
import '../../css/q/q70jd9b6d.css';
import '../../css/v/vpc7ocrne.css';
import '../../css/c/ctulpz28p.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="b2aybrbvn"/><path clip-rule="evenodd" class="wli13pbyr"/><path class="zlj6rjbtp"/><path clip-rule="evenodd" class="d-wq96bph"/><path class="ktb0f8_il"/><path clip-rule="evenodd" class="q70jd9b6d"/><path class="vpc7ocrne"/><path clip-rule="evenodd" class="ctulpz28p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:d-pad-1-outline"} {...others} />);
}

export default Component;
