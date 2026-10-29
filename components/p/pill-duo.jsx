import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bb_du2bxr.css';
import '../../css/e/ewn913uqn.css';
import '../../css/t/tph8vb83n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="bb_du2bxr"/><path class="ewn913uqn wm-a"/><path class="tph8vb83n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pill-duo"} {...others} />);
}

export default Component;
