import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/ia7btacjg.css';
import '../../css/x/xurpiib7h.css';
import '../../css/p/pyzu0_z2g.css';
import '../../css/t/t_7s9db6v.css';
import '../../css/y/yosku9bbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ia7btacjg wm-deco"/><path class="wm-deco xurpiib7h"/><path class="pyzu0_z2g wm-k"/><path class="t_7s9db6v wm-a"/><path class="wm-k yosku9bbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:camera-blueprint"} {...others} />);
}

export default Component;
