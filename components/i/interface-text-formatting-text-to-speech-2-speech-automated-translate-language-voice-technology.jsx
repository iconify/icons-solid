import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h8kztzrhi.css';
import '../../css/p/p_c6fuvtz.css';
import '../../css/q/qd1-bc3gj.css';
import '../../css/x/xnjo1obyf.css';
import '../../css/o/o07j_q5ix.css';
import '../../css/x/xe1snz29j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="h8kztzrhi"/><path class="p_c6fuvtz"/><path class="qd1-bc3gj"/><path class="xnjo1obyf"/><path class="o07j_q5ix"/><path class="xe1snz29j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-text-to-speech-2-speech-automated-translate-language-voice-technology"} {...others} />);
}

export default Component;
