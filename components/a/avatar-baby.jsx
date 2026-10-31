import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fxq8frbbg.css';
import '../../css/d/dd-4b-h4b.css';
import '../../css/w/w9far5rmo.css';
import '../../css/q/q7s13vqek.css';
import '../../css/x/x13_6nb-v.css';
import '../../css/m/molv-0b5d.css';
import '../../css/b/bs1xk8baz.css';
import '../../css/k/k_wvr05bs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fxq8frbbg wm-shadow"/><path class="dd-4b-h4b"/><path class="w9far5rmo"/><path class="q7s13vqek"/><path class="x13_6nb-v"/><path class="molv-0b5d"/><path class="bs1xk8baz"/><path class="k_wvr05bs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-baby"} {...others} />);
}

export default Component;
