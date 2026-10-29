import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8hhh0bre.css';
import '../../css/q/q92_n5bwm.css';
import '../../css/e/elsrek4hc.css';
import '../../css/v/v-h5nmdwq.css';
import '../../css/y/ygb0n7cvm.css';
import '../../css/z/zl57h6wwe.css';
import '../../css/y/ynpp55a7c.css';
import '../../css/g/gd5y4g57l.css';
import '../../css/u/unlyh1b1m.css';
import '../../css/e/e24wdybgv.css';
import '../../css/d/dtc_y0bgu.css';
import '../../css/g/gu7a0qvxt.css';
import '../../css/r/rop9djv6z.css';
import '../../css/r/rpfg1gbvs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u8hhh0bre wm-shadow"/><path class="q92_n5bwm wm-k"/><path class="elsrek4hc wm-k"/><path class="v-h5nmdwq wm-k"/><path class="wm-k ygb0n7cvm"/><path class="wm-shine zl57h6wwe"/><path class="wm-k ynpp55a7c"/><path class="gd5y4g57l wm-a"/><path class="unlyh1b1m wm-a"/><path class="e24wdybgv wm-a"/><path class="dtc_y0bgu wm-a"/><path class="gu7a0qvxt wm-a"/><path class="rop9djv6z wm-a"/><path class="rpfg1gbvs wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:santa-hat"} {...others} />);
}

export default Component;
