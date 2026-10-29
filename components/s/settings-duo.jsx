import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xjy703kxm.css';
import '../../css/h/hbi8hhkfx.css';
import '../../css/b/bp8ecnj5l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="xjy703kxm"/><path class="hbi8hhkfx wm-a"/><path class="bp8ecnj5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:settings-duo"} {...others} />);
}

export default Component;
