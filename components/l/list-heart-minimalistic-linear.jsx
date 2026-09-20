import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xa_506f5h.css';
import '../../css/p/pqx2-oyar.css';
import '../../css/p/piz2n9t2p.css';
import '../../css/b/b4_g5c43k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xa_506f5h"/><path class="pqx2-oyar"/><path class="piz2n9t2p"/><path class="b4_g5c43k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-heart-minimalistic-linear"} {...others} />);
}

export default Component;
