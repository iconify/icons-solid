import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qms-c1bqk.css';
import '../../css/l/lpwhomvqt.css';
import '../../css/k/kvmx2ccby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qms-c1bqk"/><path class="lpwhomvqt"/><path class="kvmx2ccby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:loyalty-card"} {...others} />);
}

export default Component;
