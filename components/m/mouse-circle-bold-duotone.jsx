import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ozc9qlbqj.css';
import '../../css/l/ljrt8zb7h.css';
import '../../css/t/t9umyub6g.css';
import '../../css/e/e79neke2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ozc9qlbqj"/><path class="ljrt8zb7h"/><path class="t9umyub6g"/><path class="e79neke2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mouse-circle-bold-duotone"} {...others} />);
}

export default Component;
