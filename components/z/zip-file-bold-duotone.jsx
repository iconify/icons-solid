import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p85b4paxg.css';
import '../../css/e/e_ww7zbdk.css';
import '../../css/l/l4kaw_b9b.css';
import '../../css/e/em810rbwa.css';
import '../../css/e/eh-v3ebld.css';
import '../../css/j/j2wc_ujmx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="p85b4paxg"/><path class="e_ww7zbdk"/><path class="l4kaw_b9b"/><path class="em810rbwa"/><path class="eh-v3ebld"/><path class="j2wc_ujmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:zip-file-bold-duotone"} {...others} />);
}

export default Component;
