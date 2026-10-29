import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/e/evmoo2-ox.css';
import '../../css/t/timziub5j.css';
import '../../css/z/zhwo5n9sf.css';
import '../../css/u/upp_jbb9c.css';
import '../../css/u/us6lhacvx.css';
import '../../css/n/n8uuz42bc.css';
import '../../css/w/wm6fjab7n.css';
import '../../css/d/dz-w9_b8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="evmoo2-ox wm-shadow"/><path class="timziub5j"/><path class="zhwo5n9sf"/><path class="upp_jbb9c"/><path class="us6lhacvx"/><path class="n8uuz42bc wm-shine"/><path class="wm-deco wm6fjab7n"/><path class="dz-w9_b8f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:santa-hat"} {...others} />);
}

export default Component;
