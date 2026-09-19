import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/p/p9qy93dyh.css';
import '../../css/c/cjrx-59sz.css';
import '../../css/n/ng2qdwb7q.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="p9qy93dyh"/><path clip-rule="evenodd" class="cjrx-59sz"/></g><path clip-rule="evenodd" class="ng2qdwb7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:bank-print"} {...others} />);
}

export default Component;
