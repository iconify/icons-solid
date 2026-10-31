import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/h/hwjycbb7e.css';
import '../../css/i/i1ag2jwds.css';
import '../../css/x/x3qa3_3wf.css';
import '../../css/u/un0lp_bkf.css';
import '../../css/u/ukmlmwygj.css';
import '../../css/o/op2j7xbfi.css';
import '../../css/y/ynmiqub8f.css';
import '../../css/t/tt_bkuxmg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="hwjycbb7e"/><path class="i1ag2jwds"/><path class="x3qa3_3wf"/><path class="un0lp_bkf wm-shine"/><path class="ukmlmwygj wm-k"/><path class="op2j7xbfi wm-a"/><path class="ynmiqub8f"/><path class="tt_bkuxmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:car"} {...others} />);
}

export default Component;
