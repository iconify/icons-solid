import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/q/qiya7tpcc.css';
import '../../css/a/arqah_bze.css';
import '../../css/e/e4ekblrlv.css';
import '../../css/z/zemx0r0di.css';
import '../../css/j/jz5bueyzf.css';
import '../../css/t/tvbhop7ls.css';
import '../../css/l/l-kf-bbdg.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path class="qiya7tpcc"/><path clip-rule="evenodd" class="arqah_bze"/><path class="e4ekblrlv"/><path clip-rule="evenodd" class="zemx0r0di"/></g><path clip-rule="evenodd" class="jz5bueyzf"/><path clip-rule="evenodd" class="tvbhop7ls"/><path clip-rule="evenodd" class="l-kf-bbdg"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:raise-hand-circle"} {...others} />);
}

export default Component;
