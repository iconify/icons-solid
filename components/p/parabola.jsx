import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/pp5qdiblv.css';
import '../../css/q/q_qgjk5cj.css';
import '../../css/o/oetnrnv_h.css';
import '../../css/p/p4v64zugo.css';
import '../../css/z/z-jmuejpq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="pp5qdiblv"/><path class="q_qgjk5cj"/><path class="oetnrnv_h"/><path class="p4v64zugo"/><path class="z-jmuejpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:parabola"} {...others} />);
}

export default Component;
