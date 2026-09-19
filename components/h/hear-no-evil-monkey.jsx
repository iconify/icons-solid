import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j_ywmbbfi.css';
import '../../css/p/pe71c_33p.css';
import '../../css/h/h2sscejmd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="j_ywmbbfi"/><path class="pe71c_33p"/><path class="h2sscejmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:hear-no-evil-monkey"} {...others} />);
}

export default Component;
