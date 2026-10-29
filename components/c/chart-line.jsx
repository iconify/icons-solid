import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rxhj8ibzd.css';
import '../../css/n/n615iol1f.css';
import '../../css/q/qo64dtvcj.css';
import '../../css/t/twaf8dioc.css';
import '../../css/h/h6fuc82ya.css';
import '../../css/z/zb9dynbdd.css';
import '../../css/y/y7mawcceg.css';
import '../../css/w/wgf04kb5o.css';
import '../../css/w/wziv7upvu.css';
import '../../css/o/o42viubnx.css';
import '../../css/o/o6zz-tszs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rxhj8ibzd wm-a"/><path class="n615iol1f wm-a"/><path class="qo64dtvcj wm-a"/><path class="twaf8dioc wm-k"/><path class="h6fuc82ya wm-k"/><path class="wm-k zb9dynbdd"/><path class="wm-shine y7mawcceg"/><path class="wgf04kb5o wm-k"/><path class="wm-k wziv7upvu"/><path class="o42viubnx wm-k"/><path class="o6zz-tszs wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:chart-line"} {...others} />);
}

export default Component;
