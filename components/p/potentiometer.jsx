import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/n_ofy-1wh.css';
import '../../css/u/u2uix-bvr.css';
import '../../css/v/vi7gcqpfp.css';
import '../../css/e/evux43bed.css';
import '../../css/d/drh037rnc.css';
import '../../css/f/f0_4htjze.css';
import '../../css/n/nk2azabgx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><ellipse class="n_ofy-1wh"/><path class="u2uix-bvr"/><path class="vi7gcqpfp"/><path class="evux43bed"/><path class="drh037rnc"/><path class="f0_4htjze"/><path class="nk2azabgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:potentiometer"} {...others} />);
}

export default Component;
