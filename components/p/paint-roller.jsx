import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bd2t1bccx.css';
import '../../css/f/fqpodu9zv.css';
import '../../css/u/ugnb4kbse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="bd2t1bccx"/><path class="fqpodu9zv wm-a"/><path class="ugnb4kbse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paint-roller"} {...others} />);
}

export default Component;
