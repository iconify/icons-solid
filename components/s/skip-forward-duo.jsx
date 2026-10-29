import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xmy71bqag.css';
import '../../css/b/byf_cebpl.css';
import '../../css/d/dhuewpeee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="xmy71bqag"/><path class="byf_cebpl wm-a"/><path class="dhuewpeee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:skip-forward-duo"} {...others} />);
}

export default Component;
