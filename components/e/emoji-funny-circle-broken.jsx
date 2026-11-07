import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/m/m-_j7-iyd.css';
import '../../css/t/tr1xg7b_k.css';
import '../../css/d/dvedqc_ge.css';
import '../../css/t/t6qg_cbvk.css';
import '../../css/l/l5tkhob0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="m-_j7-iyd"/><path class="tr1xg7b_k"/><path class="dvedqc_ge"/><path class="t6qg_cbvk"/><ellipse transform="rotate(-15 8.714 11.328)" class="l5tkhob0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:emoji-funny-circle-broken"} {...others} />);
}

export default Component;
