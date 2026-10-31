import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/ljv5wj_nl.css';
import '../../css/m/mob2hr_-u.css';
import '../../css/p/psyzc1_dw.css';
import '../../css/i/igb16csex.css';
import '../../css/p/p7lia970e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ljv5wj_nl"/><path class="mob2hr_-u wm-shine"/><path class="psyzc1_dw wm-k"/><path class="igb16csex wm-a"/><path class="p7lia970e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:wand"} {...others} />);
}

export default Component;
