import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/t5tv3kbbu.css';
import '../../css/k/ki7_eehwf.css';
import '../../css/k/ktt-wx2-u.css';
import '../../css/f/f5zw2kb_m.css';
import '../../css/i/i352zqbds.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="t5tv3kbbu"/><path class="ki7_eehwf"/><path class="ktt-wx2-u"/><path class="f5zw2kb_m"/><path class="i352zqbds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:link-break"} {...others} />);
}

export default Component;
