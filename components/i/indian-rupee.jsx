import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/x8p-9xhwa.css';
import '../../css/o/o2racnyup.css';
import '../../css/j/jrk-rccwt.css';
import '../../css/e/eo9d8bc5k.css';
import '../../css/v/vjzvknbir.css';
import '../../css/r/r7_f84bzj.css';
import '../../css/d/dz-w9_b8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow x8p-9xhwa"/><path class="o2racnyup"/><path class="jrk-rccwt"/><path class="eo9d8bc5k"/><path class="vjzvknbir wm-shine"/><path class="r7_f84bzj wm-deco"/><path class="dz-w9_b8f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:indian-rupee"} {...others} />);
}

export default Component;
