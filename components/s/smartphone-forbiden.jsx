import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/l/lm_ne10ov.css';
import '../../css/c/cg8kx1gvo.css';
import '../../css/z/zm065le2m.css';
import '../../css/b/by0-9rb-j.css';
import '../../css/s/s68k74fbe.css';
import '../../css/k/k_c598bcn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="lm_ne10ov"/><path class="cg8kx1gvo"/><path class="zm065le2m"/><path class="by0-9rb-j"/><path class="s68k74fbe"/><path class="k_c598bcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:smartphone-forbiden"} {...others} />);
}

export default Component;
