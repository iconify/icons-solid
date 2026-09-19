import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o__hzkbzo.css';
import '../../css/q/q_rqgsb-b.css';
import '../../css/b/bx496_bxh.css';
import '../../css/j/jyrc9yb1f.css';
import '../../css/h/h-4_1wh1y.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="o__hzkbzo"/><path clip-rule="evenodd" class="q_rqgsb-b"/><path class="bx496_bxh"/><path clip-rule="evenodd" class="jyrc9yb1f"/><path class="h-4_1wh1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:bicycle"} {...others} />);
}

export default Component;
