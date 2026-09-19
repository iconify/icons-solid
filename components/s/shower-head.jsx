import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vvlvrobpk.css';
import '../../css/s/s4_q5ve9o.css';
import '../../css/k/k98553bli.css';
import '../../css/z/zjd50vecs.css';
import '../../css/f/f2b9urbpk.css';
import '../../css/b/bavd3gbzw.css';
import '../../css/t/tb0xcxbtk.css';
import '../../css/a/a5m1j7blw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="vvlvrobpk"/><path class="s4_q5ve9o"/><path class="k98553bli"/><path class="zjd50vecs"/><path class="f2b9urbpk"/><path class="bavd3gbzw"/><path class="tb0xcxbtk"/><path class="a5m1j7blw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:shower-head"} {...others} />);
}

export default Component;
