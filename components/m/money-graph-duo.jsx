import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m0ixkvs5j.css';
import '../../css/p/pjf8b_b7v.css';
import '../../css/k/kgntgwbsa.css';
import '../../css/k/kybebhb9g.css';
import '../../css/a/ai_z3pbpc.css';
import '../../css/i/i0nqn4bol.css';
import '../../css/n/nzttizt3a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="m0ixkvs5j"/><path class="pjf8b_b7v"/><path class="kgntgwbsa"/><path class="kybebhb9g"/><path class="ai_z3pbpc"/><path class="i0nqn4bol"/><path class="nzttizt3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:money-graph-duo"} {...others} />);
}

export default Component;
