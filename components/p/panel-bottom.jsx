import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/otgjsnbvh.css';
import '../../css/i/iqtgm93sl.css';
import '../../css/p/powurt0-k.css';
import '../../css/t/ti7-frvtt.css';
import '../../css/w/w87eywcvv.css';
import '../../css/z/zwxxrhjsc.css';
import '../../css/f/fn53kljnz.css';
import '../../css/h/hq27dwb_p.css';
import '../../css/y/yl4y1tkqe.css';
import '../../css/a/a2xocqb9a.css';
import '../../css/j/jchd9zbxz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="otgjsnbvh wm-shadow"/><path class="iqtgm93sl wm-shadow"/><path class="powurt0-k"/><path class="ti7-frvtt"/><path class="w87eywcvv"/><path class="zwxxrhjsc"/><path class="fn53kljnz"/><path class="hq27dwb_p"/><path class="yl4y1tkqe"/><path class="a2xocqb9a"/><path class="jchd9zbxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:panel-bottom"} {...others} />);
}

export default Component;
