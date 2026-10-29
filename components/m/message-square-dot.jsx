import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lcioxccwn.css';
import '../../css/o/oe89m1k3u.css';
import '../../css/j/jf5vtobbu.css';
import '../../css/y/yndcx3bjh.css';
import '../../css/i/isjgimklg.css';
import '../../css/u/u-8y1vbyd.css';
import '../../css/o/otny30b4r.css';
import '../../css/v/vlqm1pblm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="lcioxccwn wm-shadow"/><path class="oe89m1k3u"/><path class="jf5vtobbu"/><path class="yndcx3bjh"/><path class="isjgimklg wm-shine"/><path class="u-8y1vbyd wm-s"/><path class="otny30b4r wm-s"/><path class="vlqm1pblm wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:message-square-dot"} {...others} />);
}

export default Component;
