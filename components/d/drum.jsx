import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gh-qacl_k.css';
import '../../css/l/l9g4xfbuu.css';
import '../../css/i/icri-2_dp.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/bs0u5mbqv.css';
import '../../css/k/k37v-wbxs.css';
import '../../css/i/izcldzbzg.css';
import '../../css/l/lq1umgrep.css';
import '../../css/n/nsgsltkkd.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="gh-qacl_k"/><path class="l9g4xfbuu"/><path class="icri-2_dp"/><g class="ij2x_72vy"><path class="bs0u5mbqv"/><circle transform="rotate(-37.021 25.342 29.18)" class="k37v-wbxs"/><path class="izcldzbzg"/><circle transform="rotate(-51.655 44.946 29.234)" class="lq1umgrep"/><path class="nsgsltkkd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:drum"} {...others} />);
}

export default Component;
