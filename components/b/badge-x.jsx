import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/coynxabas.css';
import '../../css/j/jooboubak.css';
import '../../css/d/d-j4t5d6e.css';
import '../../css/q/q0u8f-9ce.css';
import '../../css/m/mlxoisbzp.css';
import '../../css/c/cf49srovd.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="coynxabas wm-shadow"/><path class="jooboubak"/><path class="d-j4t5d6e"/><path class="q0u8f-9ce"/><path class="mlxoisbzp wm-shine"/><path class="cf49srovd wm-deco"/><path class="iqhjyybzt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:badge-x"} {...others} />);
}

export default Component;
