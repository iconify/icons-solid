import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/tu1z-y7rv.css';
import '../../css/g/g5la6wotx.css';
import '../../css/x/xurpiib7h.css';
import '../../css/u/uk8jeuusp.css';
import '../../css/l/l9angejji.css';
import '../../css/e/ev5ha8b-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="tu1z-y7rv wm-deco"/><path class="g5la6wotx wm-deco"/><path class="wm-deco xurpiib7h"/><path class="uk8jeuusp wm-k"/><path class="l9angejji wm-a"/><path class="ev5ha8b-e wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:router-blueprint"} {...others} />);
}

export default Component;
