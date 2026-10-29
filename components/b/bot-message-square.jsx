import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/roedx4bpx.css';
import '../../css/y/y5nict0aq.css';
import '../../css/b/b3y6bcb8x.css';
import '../../css/t/tb8rsemib.css';
import '../../css/i/iabu5tb_x.css';
import '../../css/v/vfpbbmbdd.css';
import '../../css/m/mbp7tjbfo.css';
import '../../css/q/ql__ai11f.css';
import '../../css/y/ybiw-ybrs.css';
import '../../css/b/bri0rq45a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="roedx4bpx wm-shadow"/><path class="wm-shadow y5nict0aq"/><path class="b3y6bcb8x"/><path class="tb8rsemib"/><path class="iabu5tb_x"/><path class="vfpbbmbdd"/><path class="mbp7tjbfo wm-shine"/><path class="ql__ai11f wm-shine"/><path class="ybiw-ybrs"/><path class="bri0rq45a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:bot-message-square"} {...others} />);
}

export default Component;
