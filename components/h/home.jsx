import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jlk_j95me.css';
import '../../css/o/oxc4onk6u.css';
import '../../css/m/ml7hm2bgp.css';
import '../../css/c/csiactmhf.css';
import '../../css/c/c1c4tmb0c.css';
import '../../css/t/t1ph39h0l.css';
import '../../css/l/lqs6-3j2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jlk_j95me wm-shadow"/><path class="oxc4onk6u"/><path class="ml7hm2bgp"/><path class="csiactmhf"/><path class="c1c4tmb0c wm-shine"/><path class="t1ph39h0l wm-deco"/><path class="lqs6-3j2e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:home"} {...others} />);
}

export default Component;
