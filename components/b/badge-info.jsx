import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/coynxabas.css';
import '../../css/j/jooboubak.css';
import '../../css/j/j7q9xobfv.css';
import '../../css/i/i9gp91cal.css';
import '../../css/m/mlxoisbzp.css';
import '../../css/c/cf49srovd.css';
import '../../css/d/dz-w9_b8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="coynxabas wm-shadow"/><path class="jooboubak"/><path class="j7q9xobfv"/><path class="i9gp91cal"/><path class="mlxoisbzp wm-shine"/><path class="cf49srovd wm-deco"/><path class="dz-w9_b8f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:badge-info"} {...others} />);
}

export default Component;
