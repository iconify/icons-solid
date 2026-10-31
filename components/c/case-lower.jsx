import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vvdg403lq.css';
import '../../css/j/jpizn9nsb.css';
import '../../css/y/yagy_qo_u.css';
import '../../css/u/uh0r30rlf.css';
import '../../css/q/qi0r9e29v.css';
import '../../css/f/fcyrw3b7v.css';
import '../../css/q/qtl9z-0dk.css';
import '../../css/u/uf5rmsb2d.css';
import '../../css/k/k3tojxb7b.css';
import '../../css/n/n8sj1wbqx.css';
import '../../css/e/e9_4vd9eh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vvdg403lq wm-shadow"/><path class="jpizn9nsb wm-a"/><path class="wm-a yagy_qo_u"/><path class="uh0r30rlf wm-a"/><path class="qi0r9e29v wm-a"/><path class="fcyrw3b7v wm-shine"/><path class="qtl9z-0dk wm-k"/><path class="uf5rmsb2d wm-k"/><path class="k3tojxb7b wm-k"/><path class="n8sj1wbqx wm-k"/><path class="e9_4vd9eh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:case-lower"} {...others} />);
}

export default Component;
