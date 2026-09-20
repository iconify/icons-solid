import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l4pr92b0j.css';
import '../../css/t/tep48fbka.css';
import '../../css/h/huvi0vdtx.css';
import '../../css/n/ncb20ka2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l4pr92b0j"/><path class="tep48fbka"/><path class="huvi0vdtx"/><path class="ncb20ka2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sofa-2-linear"} {...others} />);
}

export default Component;
