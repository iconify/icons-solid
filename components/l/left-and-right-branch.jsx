import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gx03n1s2s.css';
import '../../css/w/wjvolk09z.css';
import '../../css/l/lzs5cubzo.css';
import '../../css/e/ena28qbtw.css';
import '../../css/o/om5r6xvtb.css';
import '../../css/o/omulqwbna.css';
import '../../css/i/itrdgukch.css';
import '../../css/j/jutv17bbh.css';
import '../../css/k/k7eu7cc2s.css';
import '../../css/d/darcj60hl.css';
import '../../css/a/ao1-snwwl.css';
import '../../css/u/u3th-vb5n.css';
import '../../css/o/ojiuep8pd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="gx03n1s2s"/><path class="wjvolk09z"/><path class="lzs5cubzo"/><path class="ena28qbtw"/><circle transform="matrix(-1 0 0 1 21 24)" class="om5r6xvtb"/><circle transform="matrix(-1 0 0 1 27 24)" class="om5r6xvtb"/><path class="omulqwbna"/><path class="itrdgukch"/><path class="jutv17bbh"/><path class="k7eu7cc2s"/><path class="darcj60hl"/><path class="ao1-snwwl"/><path class="u3th-vb5n"/><path class="ojiuep8pd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:left-and-right-branch"} {...others} />);
}

export default Component;
