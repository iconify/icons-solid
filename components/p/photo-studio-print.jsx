import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/z/zh4ihwkrd.css';
import '../../css/p/pee49matl.css';
import '../../css/f/f0wx0fb-b.css';
import '../../css/q/q5jbnuotg.css';
import '../../css/x/xq4dlib6p.css';
import '../../css/a/a16zudxhb.css';
import '../../css/c/cpxpy5bpc.css';
import '../../css/i/i4fznrarx.css';
import '../../css/u/u9o-d-bxx.css';
import '../../css/s/ssh65ebln.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path clip-rule="evenodd" class="zh4ihwkrd"/><path class="pee49matl"/><path clip-rule="evenodd" class="f0wx0fb-b"/><path clip-rule="evenodd" class="q5jbnuotg"/><path class="xq4dlib6p"/><path clip-rule="evenodd" class="a16zudxhb"/><path clip-rule="evenodd" class="cpxpy5bpc"/></g><path clip-rule="evenodd" class="i4fznrarx"/><path clip-rule="evenodd" class="u9o-d-bxx"/><path clip-rule="evenodd" class="ssh65ebln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:photo-studio-print"} {...others} />);
}

export default Component;
