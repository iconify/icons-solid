import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g7gxgs2kh.css';
import '../../css/r/r79t6gbpx.css';
import '../../css/d/dme7_ac0c.css';
import '../../css/l/ljw71xo-s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="g7gxgs2kh"/><path class="r79t6gbpx"/><path class="dme7_ac0c"/><path class="ljw71xo-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:weibo"} {...others} />);
}

export default Component;
