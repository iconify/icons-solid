import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yi3hjdhnc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pg4__ow1p.css';
import '../../css/l/lo5g5bc_w.css';
import '../../css/r/rqhxtipmw.css';
import '../../css/t/t7x83a-tg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary yi3hjdhnc"/><g class="dt0cm9dhy primary"><path class="pg4__ow1p"/><path class="lo5g5bc_w"/><path class="rqhxtipmw"/><path class="t7x83a-tg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:input-search-duo"} {...others} />);
}

export default Component;
