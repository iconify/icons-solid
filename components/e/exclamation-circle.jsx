import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/utt4feufe.css';
import '../../css/q/qzf3wxbei.css';
import '../../css/w/wqaq_tblz.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="utt4feufe"/><circle class="qzf3wxbei"/><path clip-rule="evenodd" class="wqaq_tblz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:exclamation-circle"} {...others} />);
}

export default Component;
