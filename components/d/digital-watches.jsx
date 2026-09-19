import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/u_fsd8m3a.css';
import '../../css/i/i-8h9wrll.css';
import '../../css/q/qc46jsbcx.css';
import '../../css/j/jz125kqyd.css';
import '../../css/p/p-wq87bjr.css';
import '../../css/z/zwwihtb5p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><rect class="u_fsd8m3a"/><path class="i-8h9wrll"/><path class="qc46jsbcx"/><path class="jz125kqyd"/><path class="p-wq87bjr"/><path class="zwwihtb5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:digital-watches"} {...others} />);
}

export default Component;
