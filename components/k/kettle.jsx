import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/ymt-4gbjp.css';
import '../../css/e/eric1xi1g.css';
import '../../css/h/h-fypu3zk.css';
import '../../css/d/dova8_bej.css';
import '../../css/g/gpk0nrb5s.css';
import '../../css/f/fid8jms0n.css';
import '../../css/r/rwsfxii7i.css';

const viewBox = {"width":49,"height":48};
const content = `<g class="rggfaqb6e"><rect class="ymt-4gbjp"/><path class="eric1xi1g"/><path class="h-fypu3zk"/><path class="dova8_bej"/><path class="gpk0nrb5s"/><path class="fid8jms0n"/><path class="rwsfxii7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:kettle"} {...others} />);
}

export default Component;
