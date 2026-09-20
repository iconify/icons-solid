import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wtmvlacpw.css';
import '../../css/d/ds0-m5bxn.css';
import '../../css/x/x3ove9b8z.css';
import '../../css/b/bej3h2bvr.css';
import '../../css/t/ta1-4-bqx.css';
import '../../css/z/zc0n0bboj.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wtmvlacpw"/><path clip-rule="evenodd" class="ds0-m5bxn"/><path class="x3ove9b8z"/><path clip-rule="evenodd" class="bej3h2bvr"/><path class="ta1-4-bqx"/><path clip-rule="evenodd" class="zc0n0bboj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:monitor2"} {...others} />);
}

export default Component;
