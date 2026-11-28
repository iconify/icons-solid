import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ixy2n-l-q.css';
import '../../css/f/f_lh8wj9r.css';
import '../../css/r/ru0tiy9dz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ixy2n-l-q"/><path class="f_lh8wj9r"/><path class="ru0tiy9dz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mountain-snow"} {...others} />);
}

export default Component;
