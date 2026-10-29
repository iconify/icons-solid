import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dvgtr2bhk.css';
import '../../css/k/k5j6ft35x.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/c/cd_r3t75o.css';
import '../../css/h/hf7cdeb2d.css';
import '../../css/o/o2s2arf_e.css';
import '../../css/g/gtxndddku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="dvgtr2bhk wm-deco"/><path class="k5j6ft35x wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="cd_r3t75o wm-k"/><path class="hf7cdeb2d wm-a"/><path class="o2s2arf_e wm-k"/><path class="gtxndddku wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:palm-tree-blueprint"} {...others} />);
}

export default Component;
