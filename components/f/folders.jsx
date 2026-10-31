import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/orr787b3v.css';
import '../../css/j/jf8k-n6yk.css';
import '../../css/o/onwm1-qjp.css';
import '../../css/z/zuftadclm.css';
import '../../css/a/awhfcxb7h.css';
import '../../css/u/u9fldltcn.css';
import '../../css/d/d9p5fyblm.css';
import '../../css/m/mt__mutzz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="orr787b3v"/><path class="jf8k-n6yk"/><path class="onwm1-qjp wm-shine"/><path class="wm-k zuftadclm"/><path class="awhfcxb7h wm-a"/><path class="u9fldltcn"/><path class="d9p5fyblm"/><path class="mt__mutzz wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:folders"} {...others} />);
}

export default Component;
