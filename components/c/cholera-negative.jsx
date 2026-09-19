import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xq_8t15fs.css';
import '../../css/h/htn3cj9qd.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsCholeraNegative0)" class="cuyn6tgcc"><path class="xq_8t15fs"/><path clip-rule="evenodd" class="htn3cj9qd"/></g><defs><clipPath id="healthiconsCholeraNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cholera-negative"} {...others} />);
}

export default Component;
