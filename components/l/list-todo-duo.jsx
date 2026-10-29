import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y5gtsacia.css';
import '../../css/b/b2_xccbks.css';
import '../../css/f/fyx95nbgx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wm-a y5gtsacia"/><path class="b2_xccbks"/><path class="fyx95nbgx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-todo-duo"} {...others} />);
}

export default Component;
