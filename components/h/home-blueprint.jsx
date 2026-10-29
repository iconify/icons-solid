import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sbqd6ybgf.css';
import '../../css/a/adn2_vb7u.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/p/pl3ab2bcj.css';
import '../../css/b/bx2-xs7ey.css';
import '../../css/w/wxsz58mcd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="sbqd6ybgf wm-deco"/><path class="adn2_vb7u wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="pl3ab2bcj wm-k"/><path class="bx2-xs7ey wm-a"/><path class="wm-k wxsz58mcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:home-blueprint"} {...others} />);
}

export default Component;
