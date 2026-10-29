import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jt7qk4eua.css';
import '../../css/g/g_v_p-b4a.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/y/y6b34bbnk.css';
import '../../css/f/fqpodu9zv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jt7qk4eua wm-deco"/><path class="g_v_p-b4a wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="wm-k y6b34bbnk"/><path class="fqpodu9zv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paint-roller-blueprint"} {...others} />);
}

export default Component;
