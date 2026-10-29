import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fx-v4yl1e.css';
import '../../css/z/z736ycbzx.css';
import '../../css/g/g2xclxbug.css';
import '../../css/o/oo8xyndhe.css';
import '../../css/v/vug_rebuj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="fx-v4yl1e wm-deco"/><path class="wm-deco z736ycbzx"/><path class="g2xclxbug wm-deco"/><path class="oo8xyndhe wm-k"/><path class="vug_rebuj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tv-blueprint"} {...others} />);
}

export default Component;
