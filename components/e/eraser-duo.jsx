import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/ggy4urlmh.css';
import '../../css/f/feucwswsf.css';
import '../../css/i/ides4ac0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ggy4urlmh"/><path class="feucwswsf wm-a"/><path class="ides4ac0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:eraser-duo"} {...others} />);
}

export default Component;
