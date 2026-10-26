import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/v/vb2n99b0s.css';
import '../../css/q/qp71kbb_v.css';
import '../../css/w/wzn0k41fm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="vb2n99b0s"/><path class="qp71kbb_v"/><path class="wzn0k41fm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:map"} {...others} />);
}

export default Component;
