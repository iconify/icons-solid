import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dl-r0mb9j.css';
import '../../css/n/nbkf8k4_g.css';
import '../../css/k/kfebryong.css';
import '../../css/d/d-00sgnzt.css';
import '../../css/o/oflxahb5z.css';
import '../../css/m/m0o0ounwx.css';
import '../../css/d/d02_e8ilp.css';
import '../../css/g/glvsx4p1s.css';
import '../../css/z/zzs-z6uaf.css';
import '../../css/c/ch7fjbcld.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dl-r0mb9j"/><path class="nbkf8k4_g"/><path class="kfebryong"/><path class="d-00sgnzt"/><path class="oflxahb5z"/><path class="m0o0ounwx"/><path class="d02_e8ilp"/><path class="glvsx4p1s"/><path class="zzs-z6uaf"/><path class="ch7fjbcld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-bold"} {...others} />);
}

export default Component;
