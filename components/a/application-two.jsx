import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly6jl_bkj.css';
import '../../css/q/qgei9b-2x.css';
import '../../css/q/qd28qqumi.css';
import '../../css/n/nzo8xybpk.css';
import '../../css/w/wb2xu6o9b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ly6jl_bkj"><circle class="qgei9b-2x"/><circle class="qd28qqumi"/><circle class="nzo8xybpk"/><circle class="wb2xu6o9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:application-two"} {...others} />);
}

export default Component;
