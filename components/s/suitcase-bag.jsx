import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/hgtd2mbaj.css';
import '../../css/a/afmiw_bvr.css';
import '../../css/z/z1fr16f_q.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="hgtd2mbaj"/><path class="afmiw_bvr"/><path class="z1fr16f_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:suitcase-bag"} {...others} />);
}

export default Component;
