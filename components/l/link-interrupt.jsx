import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/o9m_addyg.css';
import '../../css/b/bs_8sibuq.css';
import '../../css/m/mpa0ps6tr.css';
import '../../css/d/df50yhbge.css';
import '../../css/g/g8415ibcw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="o9m_addyg"/><path class="bs_8sibuq"/><path class="mpa0ps6tr"/><path class="df50yhbge"/><path class="g8415ibcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:link-interrupt"} {...others} />);
}

export default Component;
