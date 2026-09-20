import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pk49jmwxe.css';
import '../../css/b/b4-q_fbic.css';
import '../../css/c/cjr-y2b_x.css';
import '../../css/u/uq808_b1c.css';
import '../../css/z/z79vxyeav.css';
import '../../css/d/dnbzy8kmx.css';
import '../../css/r/r_z3s8ueg.css';
import '../../css/r/rzxjegfsz.css';
import '../../css/z/z50ca2gwl.css';
import '../../css/q/qwp_f20hd.css';
import '../../css/a/ac6vs8eaf.css';
import '../../css/c/c1x1eacqm.css';

const viewBox = {"width":256,"height":63};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVG2pLw0bnU)"><path class="pk49jmwxe"/><path class="b4-q_fbic"/><path class="cjr-y2b_x"/><path class="uq808_b1c"/><path class="z79vxyeav"/><path class="dnbzy8kmx"/><path class="r_z3s8ueg"/><path class="rzxjegfsz"/><path class="z50ca2gwl"/><path class="qwp_f20hd"/><path class="ac6vs8eaf"/></g><defs><clipPath id="SVG2pLw0bnU"><path class="c1x1eacqm"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:jquery-light"} {...others} />);
}

export default Component;
