import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/urpg4uckh.css';
import '../../css/u/u9mxqjotv.css';
import '../../css/d/d7_ejibjy.css';
import '../../css/m/mujnpf-ls.css';
import '../../css/j/j2lw68b4y.css';
import '../../css/m/mdrt5ab6m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="urpg4uckh"/><path class="u9mxqjotv"/><circle class="d7_ejibjy"/><path class="mujnpf-ls"/><circle class="j2lw68b4y"/><path class="mdrt5ab6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:transactions-outline"} {...others} />);
}

export default Component;
