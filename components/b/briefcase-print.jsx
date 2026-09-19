import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/w/w1gt3jb9j.css';
import '../../css/b/b8i52t29g.css';
import '../../css/h/hj87brv2l.css';
import '../../css/v/v6g-agb9p.css';
import '../../css/v/vl882c-5e.css';
import '../../css/w/wcfahmbdn.css';
import '../../css/c/cfmhfjbyz.css';
import '../../css/x/x_qf-0aoc.css';
import '../../css/d/djcoabcjk.css';
import '../../css/i/iyz-f469g.css';
import '../../css/q/quzg2vzyk.css';
import '../../css/k/kup7plbqj.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="w1gt3jb9j"/><path clip-rule="evenodd" class="b8i52t29g"/><path class="hj87brv2l"/><path clip-rule="evenodd" class="v6g-agb9p"/><path clip-rule="evenodd" class="vl882c-5e"/></g><path clip-rule="evenodd" class="wcfahmbdn"/><path clip-rule="evenodd" class="cfmhfjbyz"/><path clip-rule="evenodd" class="x_qf-0aoc"/><path class="djcoabcjk"/><path clip-rule="evenodd" class="iyz-f469g"/><path class="quzg2vzyk"/><path clip-rule="evenodd" class="kup7plbqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:briefcase-print"} {...others} />);
}

export default Component;
