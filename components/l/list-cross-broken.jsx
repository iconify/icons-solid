import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zrz74tbgv.css';
import '../../css/q/qesyv5buv.css';
import '../../css/d/djbi_ub-i.css';
import '../../css/t/tnwts_9gl.css';
import '../../css/a/a2rh-x5uk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zrz74tbgv"/><path class="qesyv5buv"/><path class="djbi_ub-i"/><path class="tnwts_9gl"/><path class="a2rh-x5uk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-cross-broken"} {...others} />);
}

export default Component;
