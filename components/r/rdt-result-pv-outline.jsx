import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kaxks3b_j.css';
import '../../css/z/zvp92ob9o.css';
import '../../css/a/ai8-xbc-x.css';
import '../../css/w/wa65fi0wq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="kaxks3b_j"/><path clip-rule="evenodd" class="zvp92ob9o"/><path clip-rule="evenodd" class="ai8-xbc-x"/><path class="wa65fi0wq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rdt-result-pv-outline"} {...others} />);
}

export default Component;
