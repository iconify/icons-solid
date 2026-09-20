import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e-90k-bvr.css';
import '../../css/z/zwo4g4brh.css';
import '../../css/p/p_1g6h24p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="e-90k-bvr"/><circle class="zwo4g4brh"/><rect class="p_1g6h24p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:rsshub"} {...others} />);
}

export default Component;
