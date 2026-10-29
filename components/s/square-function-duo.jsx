import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zdv2jph6r.css';
import '../../css/e/eefbnzrzq.css';
import '../../css/l/lg-8n1num.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zdv2jph6r"/><path class="eefbnzrzq wm-a"/><path class="lg-8n1num"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:square-function-duo"} {...others} />);
}

export default Component;
