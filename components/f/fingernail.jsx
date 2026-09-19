import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/nn4_--rny.css';
import '../../css/g/g7qlcfhvp.css';
import '../../css/p/plr7vwr7h.css';
import '../../css/x/x9avr_b1n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="nn4_--rny"/><path class="g7qlcfhvp"/><rect class="plr7vwr7h"/><path class="x9avr_b1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:fingernail"} {...others} />);
}

export default Component;
