import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/epal951kr.css';
import '../../css/e/ehixf6b3p.css';
import '../../css/o/oks01uo_f.css';
import '../../css/b/b8rq-7bqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="epal951kr"/><path class="ehixf6b3p"/><path class="oks01uo_f"/><path class="b8rq-7bqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pipette-bold-duotone"} {...others} />);
}

export default Component;
