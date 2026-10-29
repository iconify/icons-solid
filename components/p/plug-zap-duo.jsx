import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x94fgjb4u.css';
import '../../css/c/cmbs0f95r.css';
import '../../css/o/o5_wdp8lr.css';
import '../../css/x/xk7yxfqlv.css';
import '../../css/l/l6n8hebks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="x94fgjb4u"/><path class="cmbs0f95r wm-s"/><path class="o5_wdp8lr wm-a"/><path class="xk7yxfqlv"/><path class="l6n8hebks wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plug-zap-duo"} {...others} />);
}

export default Component;
