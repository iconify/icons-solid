import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ujr860b1o.css';
import '../../css/a/adqy_2bos.css';
import '../../css/h/huvi0vdtx.css';
import '../../css/n/ncb20ka2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ujr860b1o"/><path class="adqy_2bos"/><path class="huvi0vdtx"/><path class="ncb20ka2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sofa-2-linear"} {...others} />);
}

export default Component;
