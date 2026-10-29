import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jy9_dcyeq.css';
import '../../css/x/x11_3acdh.css';
import '../../css/s/sx95o_jet.css';
import '../../css/t/taia8_bxe.css';
import '../../css/r/rtsx74b3j.css';
import '../../css/g/g0nd9h36n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jy9_dcyeq wm-shadow"/><path class="x11_3acdh"/><path class="sx95o_jet"/><path class="taia8_bxe"/><path class="rtsx74b3j wm-shine"/><path class="g0nd9h36n wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:traffic-cone"} {...others} />);
}

export default Component;
