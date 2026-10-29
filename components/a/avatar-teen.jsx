import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yr9-fbbjj.css';
import '../../css/q/qluslacga.css';
import '../../css/v/vj60u97vd.css';
import '../../css/p/px00y_byw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yr9-fbbjj"/><path class="qluslacga"/><path class="vj60u97vd wm-a"/><path class="px00y_byw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-teen"} {...others} />);
}

export default Component;
