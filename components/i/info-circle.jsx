import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aqsexabqu.css';
import '../../css/v/v6zwtfsnc.css';
import '../../css/w/wqaq_tblz.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="aqsexabqu"/><circle class="v6zwtfsnc"/><path clip-rule="evenodd" class="wqaq_tblz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:info-circle"} {...others} />);
}

export default Component;
