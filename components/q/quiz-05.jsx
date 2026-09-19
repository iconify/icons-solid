import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pjd3eub3t.css';
import '../../css/u/usrn0yb6x.css';
import '../../css/x/xn9eb62lq.css';
import '../../css/j/joezrjbqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="pjd3eub3t"/><path class="usrn0yb6x"/><path class="xn9eb62lq"/><path class="joezrjbqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:quiz-05"} {...others} />);
}

export default Component;
