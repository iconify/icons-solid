import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/ray2ttbcr.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/f/fns2mtbmy.css';
import '../../css/s/s_svs0b4j.css';
import '../../css/j/jvn23xwfy.css';
import '../../css/n/n2b5zpqag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ray2ttbcr wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="fns2mtbmy wm-k"/><path class="s_svs0b4j wm-shine"/><path class="jvn23xwfy wm-s"/><path class="n2b5zpqag wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:crystal-ball-blueprint"} {...others} />);
}

export default Component;
