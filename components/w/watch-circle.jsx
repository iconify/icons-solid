import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/f/fift_wg8m.css';
import '../../css/k/kyrh7wbrk.css';
import '../../css/i/ij1xf_b4h.css';
import '../../css/e/e9lrkdrkd.css';
import '../../css/o/o-uj5yb_r.css';
import '../../css/q/q6f6dibhu.css';
import '../../css/m/mvkg65bra.css';
import '../../css/q/q4uag0s6b.css';
import '../../css/s/sukxcv5dh.css';
import '../../css/m/m0z2utz5z.css';
import '../../css/p/p79r-ubnk.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path class="fift_wg8m"/><path clip-rule="evenodd" class="kyrh7wbrk"/><path clip-rule="evenodd" class="ij1xf_b4h"/><path clip-rule="evenodd" class="e9lrkdrkd"/><path clip-rule="evenodd" class="o-uj5yb_r"/><path class="q6f6dibhu"/></g><path clip-rule="evenodd" class="mvkg65bra"/><path clip-rule="evenodd" class="q4uag0s6b"/><path clip-rule="evenodd" class="sukxcv5dh"/><path clip-rule="evenodd" class="m0z2utz5z"/><path clip-rule="evenodd" class="p79r-ubnk"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:watch-circle"} {...others} />);
}

export default Component;
