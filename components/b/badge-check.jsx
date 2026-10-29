import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/coynxabas.css';
import '../../css/j/jooboubak.css';
import '../../css/l/lh7lgxqry.css';
import '../../css/h/hl0_7u89g.css';
import '../../css/o/oab8ih_cx.css';
import '../../css/c/cf49srovd.css';
import '../../css/l/lqs6-3j2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="coynxabas wm-shadow"/><path class="jooboubak"/><path class="lh7lgxqry"/><path class="hl0_7u89g"/><path class="oab8ih_cx wm-shine"/><path class="cf49srovd wm-deco"/><path class="lqs6-3j2e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:badge-check"} {...others} />);
}

export default Component;
