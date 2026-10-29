import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/s-xqkdb4c.css';
import '../../css/h/hp7pw7bcp.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/h/hpmsss4bu.css';
import '../../css/s/skk29hbed.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="s-xqkdb4c wm-deco"/><path class="hp7pw7bcp wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="hpmsss4bu wm-k"/><path class="skk29hbed wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:drone-blueprint"} {...others} />);
}

export default Component;
