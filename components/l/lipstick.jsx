import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/m5g2jfvyv.css';
import '../../css/q/q_md8kb1j.css';
import '../../css/v/v9se4bb_s.css';
import '../../css/w/w_s4zabes.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="m5g2jfvyv"/><rect class="q_md8kb1j"/><path class="v9se4bb_s"/><path class="w_s4zabes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:lipstick"} {...others} />);
}

export default Component;
