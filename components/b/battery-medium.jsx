import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kvw5rvb4d.css';
import '../../css/x/xu74-qg8p.css';
import '../../css/m/ml6u1xuee.css';
import '../../css/e/etjs0j4vr.css';
import '../../css/n/nn2sdrbun.css';
import '../../css/j/jj4oeyb-d.css';
import '../../css/t/tcstoebrf.css';
import '../../css/p/p0cem1b3q.css';
import '../../css/t/tvdur4brk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="kvw5rvb4d"/><path class="xu74-qg8p"/><path class="ml6u1xuee"/><path class="etjs0j4vr wm-shine"/><path class="nn2sdrbun wm-k"/><path class="jj4oeyb-d wm-a"/><path class="tcstoebrf"/><path class="p0cem1b3q"/><path class="tvdur4brk wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:battery-medium"} {...others} />);
}

export default Component;
