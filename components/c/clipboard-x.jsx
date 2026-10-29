import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lc2i193pv.css';
import '../../css/p/p_z3d3ben.css';
import '../../css/d/djjku1boi.css';
import '../../css/j/jaqxv4b0e.css';
import '../../css/s/seg39wnmx.css';
import '../../css/o/o7y68obcz.css';
import '../../css/a/ang8pkbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="lc2i193pv wm-shadow"/><path class="p_z3d3ben"/><path class="djjku1boi"/><path class="jaqxv4b0e"/><path class="seg39wnmx wm-shine"/><path class="o7y68obcz wm-deco"/><path class="ang8pkbsr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:clipboard-x"} {...others} />);
}

export default Component;
