import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m1aq21jcg.css';
import '../../css/j/jaxobrbiz.css';
import '../../css/v/v-lqhqbiy.css';
import '../../css/h/hrpwe9b1q.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="m1aq21jcg"/><path class="jaxobrbiz wm-shine"/><path class="v-lqhqbiy wm-k"/><path class="hrpwe9b1q wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:sky-lantern"} {...others} />);
}

export default Component;
