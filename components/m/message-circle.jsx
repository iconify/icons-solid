import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/k96-hormc.css';
import '../../css/t/tpugoxbzi.css';
import '../../css/y/yg6srfb8r.css';
import '../../css/z/z6s-x5nyb.css';
import '../../css/p/pc6w48p5w.css';
import '../../css/y/ymffyq-yf.css';
import '../../css/u/uzzqxw3vj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="k96-hormc"/><path class="tpugoxbzi"/><path class="wm-shine yg6srfb8r"/><path class="z6s-x5nyb"/><path class="pc6w48p5w"/><path class="ymffyq-yf"/><path class="uzzqxw3vj wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:message-circle"} {...others} />);
}

export default Component;
