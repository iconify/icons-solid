import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sbi0pnbbr.css';
import '../../css/g/gfet84u9u.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/d/dl4uzpqwq.css';
import '../../css/d/dhqc4ebed.css';
import '../../css/m/mqqas-bsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="sbi0pnbbr wm-deco"/><path class="gfet84u9u wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="dl4uzpqwq wm-k"/><path class="dhqc4ebed wm-a"/><path class="mqqas-bsr wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:martini-blueprint"} {...others} />);
}

export default Component;
