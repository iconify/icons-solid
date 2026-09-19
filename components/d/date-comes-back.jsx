import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/ndosfwbcn.css';
import '../../css/h/hq88w9bmm.css';
import '../../css/j/j4cdcjb7v.css';
import '../../css/h/h33e40b6x.css';
import '../../css/m/merlzwb_i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ndosfwbcn"/><path class="hq88w9bmm"/><path class="j4cdcjb7v"/><path class="h33e40b6x"/><path class="merlzwb_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:date-comes-back"} {...others} />);
}

export default Component;
