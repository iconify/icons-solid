import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/p/pseld3bah.css';
import '../../css/u/ucpbo0tir.css';
import '../../css/l/ldkkwxbud.css';
import '../../css/m/mj6_2kb1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="pseld3bah"/><path class="ucpbo0tir"/><path class="ldkkwxbud"/><path class="mj6_2kb1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:shipping-box-1"} {...others} />);
}

export default Component;
