import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/zp0ng9pts.css';
import '../../css/j/j2hilo-fm.css';
import '../../css/i/i64gbufwo.css';
import '../../css/f/flsy73bsi.css';
import '../../css/y/ydj_w6eka.css';
import '../../css/u/usyb2xbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow zp0ng9pts"/><path class="j2hilo-fm"/><path class="i64gbufwo"/><path class="flsy73bsi"/><path class="wm-shine ydj_w6eka"/><path class="usyb2xbzn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:map-pin-check"} {...others} />);
}

export default Component;
