import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/a/ajocccbun.css';
import '../../css/q/qdju_550o.css';
import '../../css/e/e8bpjlecu.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path clip-rule="evenodd" class="ajocccbun"/><path class="qdju_550o"/></g><path clip-rule="evenodd" class="e8bpjlecu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:hand-grab-print"} {...others} />);
}

export default Component;
