import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozm7_7bck.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/plnm0pbbv.css';
import '../../css/i/ihwcb10dm.css';
import '../../css/r/r_7vyuvwe.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sm3x11bkl.css';
import '../../css/a/avkgo_38f.css';
import '../../css/v/velgbtfkl.css';
import '../../css/y/yisalbcqu.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGBrfiKcAQ" class="ozm7_7bck"/></defs><g class="t_2lkqbxb"><path class="plnm0pbbv wm-shadow"/><path class="ihwcb10dm"/><path class="r_7vyuvwe"/><use href="#SVGBrfiKcAQ" class="d2kvgvbvc"/><path class="sm3x11bkl"/><use href="#SVGBrfiKcAQ" class="d2kvgvbvc"/><path class="avkgo_38f"/><path class="velgbtfkl wm-shine"/><path class="wm-deco yisalbcqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:air-vent"} {...others} />);
}

export default Component;
