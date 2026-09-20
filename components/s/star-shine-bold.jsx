import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/njqtqdg9b.css';
import '../../css/c/cl_wftywe.css';
import '../../css/p/ptlp5fb9o.css';
import '../../css/q/qeclod8gs.css';
import '../../css/a/ae7waxbpd.css';
import '../../css/t/tqev25b8a.css';
import '../../css/e/e9j2u8bet.css';
import '../../css/i/ie-ko6b_u.css';
import '../../css/k/kb4rr-pjg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="njqtqdg9b"/><path class="cl_wftywe"/><path class="ptlp5fb9o"/><path class="qeclod8gs"/><path class="ae7waxbpd"/><path class="tqev25b8a"/><path class="e9j2u8bet"/><path class="ie-ko6b_u"/><path class="kb4rr-pjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-shine-bold"} {...others} />);
}

export default Component;
