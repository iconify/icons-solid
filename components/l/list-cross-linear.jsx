import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zrz74tbgv.css';
import '../../css/j/jv514ss1m.css';
import '../../css/r/rbjrgob2r.css';
import '../../css/q/qesyv5buv.css';
import '../../css/d/djbi_ub-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zrz74tbgv"/><path class="jv514ss1m"/><path class="rbjrgob2r"/><path class="qesyv5buv"/><path class="djbi_ub-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-cross-linear"} {...others} />);
}

export default Component;
