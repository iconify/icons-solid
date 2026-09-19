import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yizjjzobk.css';
import '../../css/r/rv9xn1b9q.css';
import '../../css/m/mh_q3pbjg.css';
import '../../css/u/uuuzw-biv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><circle class="yizjjzobk"/><path class="rv9xn1b9q"/><path class="mh_q3pbjg"/><path class="uuuzw-biv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:girl"} {...others} />);
}

export default Component;
