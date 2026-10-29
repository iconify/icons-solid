import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qen4ux05d.css';
import '../../css/a/afx3wjhic.css';
import '../../css/c/c-frn5b_h.css';
import '../../css/n/ni2s7jrqo.css';
import '../../css/k/kveoqhyms.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="qen4ux05d wm-deco"/><path class="afx3wjhic wm-deco"/><path class="c-frn5b_h wm-deco"/><path class="ni2s7jrqo wm-k"/><path class="kveoqhyms wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wand-sparkles-blueprint"} {...others} />);
}

export default Component;
