import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/z/zba7elpoj.css';
import '../../css/v/vq4h-30hj.css';
import '../../css/x/x-k2_mhao.css';
import '../../css/l/lcmemmihy.css';
import '../../css/l/lp_ipabev.css';
import '../../css/m/mmbk130cf.css';
import '../../css/e/ev_pil2dq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="zba7elpoj"/><path class="vq4h-30hj"/><path class="x-k2_mhao"/><path class="lcmemmihy"/><path class="lp_ipabev"/><path class="mmbk130cf"/><path class="ev_pil2dq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:coordinate-system"} {...others} />);
}

export default Component;
