import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yo5z61b0s.css';
import '../../css/j/j6dr_wk-z.css';
import '../../css/r/r6m4m4-ha.css';
import '../../css/l/l4ahcjbzk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="yo5z61b0s"/><path class="j6dr_wk-z"/><path class="r6m4m4-ha"/><path class="l4ahcjbzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:misaligned-semicircle"} {...others} />);
}

export default Component;
