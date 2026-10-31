import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/s1q6_wbjo.css';
import '../../css/k/kgpktwbwm.css';
import '../../css/e/estnqplnn.css';
import '../../css/b/b4ddo2m9u.css';
import '../../css/s/sjf757wdp.css';
import '../../css/f/fii04bbwj.css';
import '../../css/t/tw-uc6bge.css';
import '../../css/r/r49q2ni_u.css';
import '../../css/v/ve_zku8ll.css';
import '../../css/g/gqqjf5b7f.css';
import '../../css/n/nijoo0bcm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="s1q6_wbjo"/><path class="kgpktwbwm"/><path class="estnqplnn"/><path class="b4ddo2m9u"/><path class="sjf757wdp wm-shine"/><path class="fii04bbwj wm-k"/><path class="tw-uc6bge wm-k"/><path class="r49q2ni_u wm-k"/><path class="ve_zku8ll"/><path class="gqqjf5b7f wm-shine"/><path class="nijoo0bcm wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:turtle"} {...others} />);
}

export default Component;
