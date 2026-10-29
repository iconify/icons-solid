import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/f5fyfeb4d.css';
import '../../css/m/mj045rbhx.css';
import '../../css/e/esq8rfb3o.css';
import '../../css/d/d46rvgxqo.css';
import '../../css/y/y7g4hb6ig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="f5fyfeb4d wm-deco"/><path class="mj045rbhx wm-deco"/><path class="esq8rfb3o wm-deco"/><path class="d46rvgxqo wm-k"/><path class="wm-a y7g4hb6ig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hand-coins-blueprint"} {...others} />);
}

export default Component;
