import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fpdd2ab7l.css';
import '../../css/z/zl8syfbae.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/h/hbi8hhkfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fpdd2ab7l"/><path class="wm-a zl8syfbae"/><path class="yw4fz_b6b"/><path class="hbi8hhkfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:donut-duo"} {...others} />);
}

export default Component;
