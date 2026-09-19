import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/i_v6csbnt.css';
import '../../css/q/q0d0g9bjc.css';
import '../../css/r/rll79qfro.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="i_v6csbnt"/><path class="q0d0g9bjc"/><path class="rll79qfro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ce-marking"} {...others} />);
}

export default Component;
