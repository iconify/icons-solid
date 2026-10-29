import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zccxc2biv.css';
import '../../css/f/fcqp69bgt.css';
import '../../css/p/pf9cqzq4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zccxc2biv"/><path class="fcqp69bgt wm-a"/><path class="pf9cqzq4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:laptop-duo"} {...others} />);
}

export default Component;
