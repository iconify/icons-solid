import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/njf2fobjc.css';
import '../../css/g/g9qymfbcc.css';
import '../../css/w/woho9rb-h.css';
import '../../css/k/k9v9jwbuw.css';
import '../../css/r/r-0z9gbmr.css';
import '../../css/m/m2bjucbsv.css';
import '../../css/d/dsak6vbrr.css';
import '../../css/u/ujrh7uxzm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="njf2fobjc"/><path class="g9qymfbcc"/><path class="woho9rb-h"/><path class="k9v9jwbuw"/><path class="r-0z9gbmr"/><path class="m2bjucbsv"/><path class="dsak6vbrr"/><path class="ujrh7uxzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cycle"} {...others} />);
}

export default Component;
