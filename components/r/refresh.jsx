import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/sl14ojb3u.css';
import '../../css/i/ifs9e5xxt.css';
import '../../css/l/lhgpxmy5g.css';
import '../../css/u/uspp0k17v.css';
import '../../css/m/mvfx-ccwi.css';
import '../../css/a/a_7ev-9kr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="sl14ojb3u wm-shadow"/><path class="ifs9e5xxt"/><path class="lhgpxmy5g"/><path class="uspp0k17v"/><path class="mvfx-ccwi wm-shine"/><path class="a_7ev-9kr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:refresh"} {...others} />);
}

export default Component;
