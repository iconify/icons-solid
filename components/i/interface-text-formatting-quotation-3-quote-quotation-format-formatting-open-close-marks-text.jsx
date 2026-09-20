import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nenzo99gp.css';
import '../../css/q/q912owb0i.css';
import '../../css/g/g63g971se.css';
import '../../css/d/doofirb6l.css';
import '../../css/u/unko0cbqj.css';
import '../../css/u/ucfn86b1o.css';
import '../../css/o/oncjaib-z.css';
import '../../css/n/nbm_1gbhv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="nenzo99gp"/><circle class="q912owb0i"/><path class="g63g971se"/><circle class="doofirb6l"/><path class="unko0cbqj"/><circle class="ucfn86b1o"/><path class="oncjaib-z"/><circle class="nbm_1gbhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-quotation-3-quote-quotation-format-formatting-open-close-marks-text"} {...others} />);
}

export default Component;
