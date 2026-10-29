import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/f2pa8kb_f.css';
import '../../css/l/lonjqkbca.css';
import '../../css/g/gede4sbhw.css';
import '../../css/d/d090qabua.css';
import '../../css/a/ahop62b2a.css';
import '../../css/y/ymos10-bt.css';
import '../../css/v/vyozlm6oi.css';
import '../../css/d/dlw69hbtj.css';
import '../../css/y/yo8zwc1-k.css';
import '../../css/e/ezf4ijb_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="f2pa8kb_f wm-shadow"/><path class="lonjqkbca"/><path class="gede4sbhw"/><path class="d090qabua"/><path class="ahop62b2a wm-shine"/><path class="wm-s ymos10-bt"/><path class="vyozlm6oi wm-s"/><path class="dlw69hbtj wm-s"/><path class="wm-deco yo8zwc1-k"/><path class="ezf4ijb_t wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:phone-forwarded"} {...others} />);
}

export default Component;
