import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-dhidc5t.css';
import '../../css/w/wye3vbbyy.css';
import '../../css/v/vg9ssebxs.css';
import '../../css/k/kydsnpbma.css';
import '../../css/n/nzcnphbid.css';
import '../../css/o/o6qyj4wjg.css';
import '../../css/t/tmsx7hrnr.css';
import '../../css/o/ovwr4s5rl.css';
import '../../css/f/fj5nfccbb.css';
import '../../css/j/jp09xgbeb.css';
import '../../css/p/pkhlx9bth.css';
import '../../css/k/kpyph6ozm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s-dhidc5t wm-shadow"/><path class="wm-shadow wye3vbbyy"/><path class="vg9ssebxs"/><path class="kydsnpbma"/><path class="nzcnphbid"/><path class="o6qyj4wjg"/><path class="tmsx7hrnr wm-shine"/><path class="ovwr4s5rl wm-shine"/><path class="fj5nfccbb"/><path class="jp09xgbeb"/><path class="pkhlx9bth"/><path class="kpyph6ozm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:spider-web"} {...others} />);
}

export default Component;
