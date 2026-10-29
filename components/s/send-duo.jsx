import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/ktk-1bz9k.css';
import '../../css/b/btb9bc3qj.css';
import '../../css/v/v3eqelbpl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ktk-1bz9k"/><path class="btb9bc3qj wm-a"/><path class="v3eqelbpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:send-duo"} {...others} />);
}

export default Component;
