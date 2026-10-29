import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hooc3vbcx.css';
import '../../css/x/xq8xli58z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="hooc3vbcx"/><path class="wm-a xq8xli58z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:badge-info"} {...others} />);
}

export default Component;
