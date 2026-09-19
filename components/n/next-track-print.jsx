import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/p/p1m3_jb_z.css';
import '../../css/s/s_fkl0bba.css';
import '../../css/k/k_-zi13sx.css';
import '../../css/e/e06i41bqk.css';
import '../../css/e/eniaalbyz.css';
import '../../css/b/b4rvv77mk.css';
import '../../css/u/u3s5p0b3s.css';
import '../../css/b/bx5q0wb9m.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="p1m3_jb_z"/><path clip-rule="evenodd" class="s_fkl0bba"/><path class="k_-zi13sx"/><path clip-rule="evenodd" class="e06i41bqk"/><path clip-rule="evenodd" class="eniaalbyz"/></g><path clip-rule="evenodd" class="b4rvv77mk"/><path clip-rule="evenodd" class="u3s5p0b3s"/><path clip-rule="evenodd" class="bx5q0wb9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:next-track-print"} {...others} />);
}

export default Component;
