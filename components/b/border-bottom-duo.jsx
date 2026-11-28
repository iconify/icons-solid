import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vv4lo6b2m.css';
import '../../css/y/yuqsx4b3l.css';
import '../../css/r/rxtr1zhvq.css';
import '../../css/z/zur3_u58h.css';
import '../../css/s/s2dxsz5hn.css';
import '../../css/s/sqzde2btt.css';
import '../../css/k/kuf1qebvx.css';
import '../../css/t/tb4ptib3x.css';
import '../../css/t/tl5o_yb2y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vv4lo6b2m"/><path class="yuqsx4b3l"/><path class="rxtr1zhvq"/><path class="zur3_u58h"/><path class="s2dxsz5hn"/><path class="sqzde2btt"/><path class="kuf1qebvx"/><path class="tb4ptib3x"/><path class="tl5o_yb2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:border-bottom-duo"} {...others} />);
}

export default Component;
