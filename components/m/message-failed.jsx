import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jumo7rhsr.css';
import '../../css/m/mca3ekbcz.css';
import '../../css/l/l-pi_cb3q.css';
import '../../css/h/hijxq85yf.css';
import '../../css/s/s3j7utbrh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="jumo7rhsr"/><path class="mca3ekbcz"/><path class="l-pi_cb3q"/><path class="hijxq85yf"/><path class="s3j7utbrh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:message-failed"} {...others} />);
}

export default Component;
