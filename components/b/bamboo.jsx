import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/l0lx2tbfq.css';
import '../../css/c/cxl_akbwb.css';
import '../../css/r/rboke9brm.css';
import '../../css/j/jemk-6hhn.css';
import '../../css/t/tb6wd6q1m.css';
import '../../css/g/g4jl-u_xd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="l0lx2tbfq wm-shadow"/><path class="cxl_akbwb"/><path class="rboke9brm"/><path class="jemk-6hhn"/><path class="tb6wd6q1m"/><path class="g4jl-u_xd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:bamboo"} {...others} />);
}

export default Component;
