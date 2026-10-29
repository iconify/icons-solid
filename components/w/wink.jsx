import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ld-bvobrv.css';
import '../../css/p/pyq4xhben.css';
import '../../css/t/t6j4pnbnz.css';
import '../../css/c/cwl3bwb4e.css';
import '../../css/b/bds2yn76m.css';
import '../../css/g/g9f5sxbiw.css';
import '../../css/y/yoob43bvy.css';
import '../../css/i/i8platbzq.css';
import '../../css/e/eoiwheb7v.css';
import '../../css/o/oovk3-bnb.css';
import '../../css/m/m_mvrxb0e.css';
import '../../css/p/pzhelujme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ld-bvobrv wm-shadow"/><path class="pyq4xhben wm-shadow"/><path class="t6j4pnbnz"/><path class="cwl3bwb4e"/><path class="bds2yn76m"/><path class="g9f5sxbiw"/><path class="wm-shine yoob43bvy"/><path class="i8platbzq wm-shine"/><path class="eoiwheb7v"/><path class="oovk3-bnb"/><path class="m_mvrxb0e"/><path class="pzhelujme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:wink"} {...others} />);
}

export default Component;
