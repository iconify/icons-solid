import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ij883nb6j.css';
import '../../css/m/mebepjbpv.css';
import '../../css/l/lld-bqbtb.css';
import '../../css/u/u90b6tbsy.css';
import '../../css/r/r1zeu3bzj.css';
import '../../css/p/pzvibbb2k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ij883nb6j"/><path class="mebepjbpv"/><path class="lld-bqbtb"/><path class="u90b6tbsy"/><path class="r1zeu3bzj"/><path class="pzvibbb2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-asia-duo"} {...others} />);
}

export default Component;
