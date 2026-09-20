import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q81nccbiy.css';
import '../../css/l/lc42omyyv.css';
import '../../css/q/quyvxubgb.css';
import '../../css/i/iac-v73fn.css';
import '../../css/t/td_1d7qzu.css';
import '../../css/t/tmqepzbkj.css';
import '../../css/h/h-5sqgc1p.css';
import '../../css/b/bg4vq9djo.css';
import '../../css/m/mbnc42i4k.css';
import '../../css/t/tb3o5j-zo.css';
import '../../css/q/qmmgojpvd.css';
import '../../css/t/tzm3facgq.css';
import '../../css/p/p0f4jjtfi.css';
import '../../css/o/o4vea3uzh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q81nccbiy"/><path class="lc42omyyv"/><path class="quyvxubgb"/><path class="iac-v73fn"/><path class="td_1d7qzu"/><path class="tmqepzbkj"/><path class="h-5sqgc1p"/><path class="bg4vq9djo"/><path class="mbnc42i4k"/><path class="tb3o5j-zo"/><path class="qmmgojpvd"/><path class="tzm3facgq"/><path class="p0f4jjtfi"/><path class="o4vea3uzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:ant"} {...others} />);
}

export default Component;
