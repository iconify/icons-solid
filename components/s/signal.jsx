import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hl2hibcig.css';
import '../../css/x/xpmq-ccdk.css';
import '../../css/o/onsd48b_g.css';
import '../../css/d/d8rwe23al.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="hl2hibcig"/><path class="xpmq-ccdk"/><path class="onsd48b_g"/><path class="d8rwe23al"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:signal"} {...others} />);
}

export default Component;
