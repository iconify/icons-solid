import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ehgbhcbes.css';
import '../../css/h/hqsrlacsk.css';
import '../../css/r/r0705xbwf.css';
import '../../css/q/qdn3t5beb.css';
import '../../css/d/dxg5ttc-n.css';
import '../../css/r/rdkjysbqe.css';
import '../../css/u/ug7jmxb_i.css';
import '../../css/r/rpuzp2shw.css';
import '../../css/m/m7y2__50n.css';
import '../../css/i/itsd1bckt.css';
import '../../css/n/n5nqe6iyu.css';
import '../../css/j/j9flsdokw.css';
import '../../css/l/l5o6ce2na.css';

const viewBox = {"width":402,"height":402};
const content = `<g class="ft5dv1b6b"><path class="ehgbhcbes"/><path class="hqsrlacsk"/><path class="r0705xbwf"/><path class="qdn3t5beb"/><path class="dxg5ttc-n"/><path class="rdkjysbqe"/><path class="ug7jmxb_i"/><path class="rpuzp2shw"/><path class="m7y2__50n"/><path class="itsd1bckt"/><path class="n5nqe6iyu"/><path class="j9flsdokw"/><path class="l5o6ce2na"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:discorddotjs"} {...others} />);
}

export default Component;
