import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oan3fnbps.css';
import '../../css/h/hl1atb0al.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/z/z08dbetjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="oan3fnbps"/><path class="hl1atb0al wm-a"/><path class="yw4fz_b6b"/><path class="wm-a z08dbetjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:target-duo"} {...others} />);
}

export default Component;
