import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/aouhjubqb.css';
import '../../css/q/qta0skbgs.css';
import '../../css/n/nlrcsmemk.css';
import '../../css/n/nfamginwy.css';
import '../../css/s/sk-5kybqt.css';
import '../../css/s/sojwkwbbk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="aouhjubqb"/><path class="qta0skbgs"/><path class="nlrcsmemk"/><path class="nfamginwy"/><path class="sk-5kybqt"/><path class="sojwkwbbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:ruler"} {...others} />);
}

export default Component;
