import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1-cm4brz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/whtvn7boo.css';
import '../../css/d/d8v54zgrd.css';
import '../../css/s/s7l4crbfx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o1-cm4brz secondary"/><g class="dt0cm9dhy primary"><path class="whtvn7boo"/><path class="d8v54zgrd"/><path class="s7l4crbfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pineapple-duo"} {...others} />);
}

export default Component;
