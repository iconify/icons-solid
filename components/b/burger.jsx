import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/llj64r9lp.css';
import '../../css/f/fk4cg_9vy.css';
import '../../css/l/l36_jnbbn.css';
import '../../css/s/sdlxyb6on.css';
import '../../css/x/xw8a47beg.css';
import '../../css/y/yulppb35a.css';
import '../../css/x/xtr692d7g.css';
import '../../css/d/dywov_cvp.css';
import '../../css/o/odb4jcbcd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="llj64r9lp wm-shadow"/><path class="fk4cg_9vy"/><path class="l36_jnbbn"/><path class="sdlxyb6on"/><path class="xw8a47beg"/><path class="yulppb35a"/><path class="xtr692d7g"/><path class="dywov_cvp wm-shine"/><path class="odb4jcbcd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:burger"} {...others} />);
}

export default Component;
