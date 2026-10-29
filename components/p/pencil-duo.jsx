import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ix49qzbxz.css';
import '../../css/j/jm-o6kx0w.css';
import '../../css/l/lqpi8na-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ix49qzbxz"/><path class="jm-o6kx0w wm-a"/><path class="lqpi8na-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pencil-duo"} {...others} />);
}

export default Component;
