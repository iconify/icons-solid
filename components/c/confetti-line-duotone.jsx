import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/q/q024e90lv.css';
import '../../css/q/qbwimunmc.css';
import '../../css/o/o9qiojmml.css';
import '../../css/z/zfl_jac2j.css';
import '../../css/k/kkvkpubkh.css';
import '../../css/o/o43socszj.css';
import '../../css/y/ysxz8j9bw.css';
import '../../css/x/xy513rbki.css';
import '../../css/k/kt4bt5bqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="q024e90lv"/><path class="qbwimunmc"/><path class="o9qiojmml"/><path class="zfl_jac2j"/><path class="kkvkpubkh"/><path class="o43socszj"/><path class="ysxz8j9bw"/><path class="xy513rbki"/><path class="kt4bt5bqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:confetti-line-duotone"} {...others} />);
}

export default Component;
