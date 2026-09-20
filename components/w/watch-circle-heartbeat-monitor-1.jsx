import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/obk7bu9fn.css';
import '../../css/d/da956ozzh.css';
import '../../css/e/eixxqsdrl.css';
import '../../css/q/qo3k9bbgr.css';
import '../../css/m/mqkllgbwb.css';
import '../../css/w/wdmneh1tw.css';
import '../../css/m/mec2uqbtu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="obk7bu9fn"/><path class="da956ozzh"/><path class="eixxqsdrl"/><path class="qo3k9bbgr"/><path class="mqkllgbwb"/><path class="wdmneh1tw"/><path class="mec2uqbtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:watch-circle-heartbeat-monitor-1"} {...others} />);
}

export default Component;
