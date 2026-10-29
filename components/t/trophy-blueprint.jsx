import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/s4cfjypce.css';
import '../../css/s/sbsfawmcu.css';
import '../../css/d/dlmywhbph.css';
import '../../css/i/ieoysimau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="s4cfjypce wm-deco"/><path class="sbsfawmcu wm-deco"/><path class="dlmywhbph wm-deco"/><path class="ieoysimau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:trophy-blueprint"} {...others} />);
}

export default Component;
