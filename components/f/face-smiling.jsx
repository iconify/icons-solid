import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qhr87xbvl.css';
import '../../css/x/xs1p5p0xc.css';
import '../../css/a/adjqzl9mh.css';
import '../../css/u/uf50r_q1t.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="qhr87xbvl"/><path clip-rule="evenodd" class="xs1p5p0xc"/><path clip-rule="evenodd" class="adjqzl9mh"/><path class="uf50r_q1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:face-smiling"} {...others} />);
}

export default Component;
