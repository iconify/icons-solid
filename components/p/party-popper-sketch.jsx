import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mytwn4byj.css';
import '../../css/m/mypwvhfpi.css';
import '../../css/t/tu05rhbbq.css';
import '../../css/n/n_u26bcvo.css';
import '../../css/b/b_9x90big.css';
import '../../css/f/fwq7t4hzk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mytwn4byj"/><path class="mypwvhfpi wm-k"/><path class="tu05rhbbq wm-a"/><path class="n_u26bcvo wm-k"/><path class="b_9x90big wm-a"/><path class="fwq7t4hzk wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:party-popper-sketch"} {...others} />);
}

export default Component;
