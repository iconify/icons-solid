import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b82_lgb4i.css';
import '../../css/u/utlldtpzg.css';
import '../../css/l/ld1xqcbqy.css';
import '../../css/k/k36r9ab-q.css';
import '../../css/g/g6557jmxh.css';
import '../../css/p/pp4s2ixyn.css';
import '../../css/t/tamffebzn.css';
import '../../css/v/vtsw06bbr.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="b82_lgb4i"/><path clip-rule="evenodd" class="utlldtpzg"/><path clip-rule="evenodd" class="ld1xqcbqy"/><path clip-rule="evenodd" class="k36r9ab-q"/><path class="g6557jmxh"/><path clip-rule="evenodd" class="pp4s2ixyn"/><path class="tamffebzn"/><path clip-rule="evenodd" class="vtsw06bbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:alarm-print"} {...others} />);
}

export default Component;
