import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/ruj14bc8a.css';
import '../../css/y/y2f9i401d.css';
import '../../css/m/mt1n7fy8v.css';
import '../../css/v/v00yly7kq.css';
import '../../css/m/mb6xixepj.css';
import '../../css/g/gw4nzxvdh.css';
import '../../css/u/uy-f--bzb.css';
import '../../css/x/x2944nn6l.css';
import '../../css/s/s7-czyclq.css';
import '../../css/k/k98ruq81w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ruj14bc8a wm-shadow"/><path class="y2f9i401d"/><path class="mt1n7fy8v"/><path class="v00yly7kq"/><path class="mb6xixepj wm-shine"/><path class="gw4nzxvdh wm-s"/><path class="uy-f--bzb wm-s"/><path class="wm-s x2944nn6l"/><path class="s7-czyclq wm-deco"/><path class="k98ruq81w wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:repeat-1"} {...others} />);
}

export default Component;
