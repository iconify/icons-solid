import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/i/iz_gcabos.css';
import '../../css/c/cwhlfnj4u.css';
import '../../css/n/nvpwl1gza.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="iz_gcabos"/><path class="cwhlfnj4u"/><path class="nvpwl1gza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:dashboard-gauge-2"} {...others} />);
}

export default Component;
