import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uz-6ybbfc.css';
import '../../css/p/p0mqq1_8c.css';
import '../../css/k/kva043bzk.css';
import '../../css/j/jt_thrbns.css';
import '../../css/k/kuvu9bc5l.css';
import '../../css/r/rainf0t7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="uz-6ybbfc"/><path class="p0mqq1_8c"/><path class="kva043bzk"/><path class="jt_thrbns"/><path class="kuvu9bc5l"/><path class="rainf0t7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:monitor-camera-broken"} {...others} />);
}

export default Component;
