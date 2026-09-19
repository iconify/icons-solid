import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jtpj97x1o.css';
import '../../css/d/d1n9r9ksb.css';
import '../../css/q/q2zzwivut.css';
import '../../css/h/he134g8jv.css';
import '../../css/c/cau7scc_q.css';
import '../../css/s/s15k2qqkb.css';
import '../../css/r/rgq8cl4gc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="jtpj97x1o"/><path class="d1n9r9ksb"/><path class="q2zzwivut"/><path class="he134g8jv"/><path class="cau7scc_q"/><path class="s15k2qqkb"/><path class="rgq8cl4gc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:fireworks"} {...others} />);
}

export default Component;
