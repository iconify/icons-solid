import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/lfxcz6bwc.css';
import '../../css/s/svm790yja.css';
import '../../css/n/nf2cbo_0p.css';
import '../../css/q/qiyypgbtt.css';
import '../../css/s/swv5gibmp.css';
import '../../css/w/wer_ogb9b.css';
import '../../css/z/z5qsc6boq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="lfxcz6bwc"/><path class="svm790yja"/><path class="nf2cbo_0p wm-shine"/><path class="qiyypgbtt wm-k"/><path class="swv5gibmp wm-a"/><path class="wer_ogb9b wm-s"/><path class="wm-deco z5qsc6boq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:heart-gift"} {...others} />);
}

export default Component;
