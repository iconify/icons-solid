import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dsv5u4bvs.css';
import '../../css/p/pn3ybpbhi.css';
import '../../css/w/w76mqob-b.css';
import '../../css/e/ehs1v-pvm.css';
import '../../css/d/dzh0sd-ju.css';
import '../../css/g/g4jl-u_xd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="dsv5u4bvs wm-shadow"/><path class="pn3ybpbhi"/><path class="w76mqob-b"/><path class="ehs1v-pvm"/><path class="dzh0sd-ju wm-shine"/><path class="g4jl-u_xd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:swap"} {...others} />);
}

export default Component;
