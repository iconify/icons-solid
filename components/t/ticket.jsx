import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/u9n0vfb_o.css';
import '../../css/e/ehbq24biy.css';
import '../../css/r/r0dukdb1k.css';
import '../../css/u/uy2bwtbta.css';
import '../../css/i/i4bvl7b5s.css';
import '../../css/e/erepes1tj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="u9n0vfb_o wm-shadow"/><path class="ehbq24biy"/><path class="r0dukdb1k"/><path class="uy2bwtbta"/><path class="i4bvl7b5s wm-shine"/><path class="erepes1tj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:ticket"} {...others} />);
}

export default Component;
