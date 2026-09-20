import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c6aatbbnu.css';
import '../../css/p/pqx2-oyar.css';
import '../../css/l/l4vllvb7o.css';
import '../../css/t/tnwts_9gl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c6aatbbnu"/><path class="pqx2-oyar"/><path class="l4vllvb7o"/><path class="tnwts_9gl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-check-minimalistic-broken"} {...others} />);
}

export default Component;
