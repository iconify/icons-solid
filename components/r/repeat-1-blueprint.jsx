import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/pcockiiqs.css';
import '../../css/l/lrjk56qgd.css';
import '../../css/o/ot65gyaqq.css';
import '../../css/p/pd6at2h0p.css';
import '../../css/u/ug31pzk5c.css';
import '../../css/o/oqg61v55z.css';
import '../../css/h/he-8tducu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="pcockiiqs wm-deco"/><path class="lrjk56qgd wm-deco"/><path class="ot65gyaqq wm-k"/><path class="pd6at2h0p wm-a"/><path class="ug31pzk5c wm-s"/><path class="oqg61v55z wm-k"/><path class="he-8tducu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:repeat-1-blueprint"} {...others} />);
}

export default Component;
