import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zh_u0iaqv.css';
import '../../css/h/hwifnpb2v.css';
import '../../css/k/k1tkx2bcg.css';
import '../../css/q/quzsnqbup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zh_u0iaqv"/><path class="hwifnpb2v"/><path class="k1tkx2bcg"/><path class="quzsnqbup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:weigher-broken"} {...others} />);
}

export default Component;
