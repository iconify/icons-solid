import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nzj6n2bwj.css';
import '../../css/k/kh-yz4bnz.css';
import '../../css/z/zq65hkbif.css';
import '../../css/x/xzw2n6bef.css';
import '../../css/r/r197j7ggb.css';
import '../../css/f/f17gdebpr.css';
import '../../css/i/ii9lkdw2v.css';
import '../../css/l/lkd8h5bqq.css';
import '../../css/i/i15b-gxgd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nzj6n2bwj wm-shadow"/><path class="kh-yz4bnz wm-shadow"/><path class="zq65hkbif"/><path class="xzw2n6bef"/><path class="r197j7ggb"/><path class="f17gdebpr"/><path class="ii9lkdw2v"/><path class="lkd8h5bqq"/><path class="i15b-gxgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:file-warning"} {...others} />);
}

export default Component;
