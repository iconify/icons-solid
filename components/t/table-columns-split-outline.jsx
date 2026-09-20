import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qn6_ojfra.css';
import '../../css/m/mzfntd25e.css';
import '../../css/m/manq_yo4c.css';
import '../../css/h/hw33eybix.css';
import '../../css/p/psrat2bwc.css';
import '../../css/v/vj_1crbiz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qn6_ojfra"/><path clip-rule="evenodd" class="mzfntd25e"/><path class="manq_yo4c"/><path class="hw33eybix"/><path class="psrat2bwc"/><path class="vj_1crbiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-columns-split-outline"} {...others} />);
}

export default Component;
