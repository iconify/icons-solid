import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/sjxjgyxar.css';
import '../../css/k/kkku0dawa.css';
import '../../css/z/zkutxob7u.css';
import '../../css/w/wbpg0kp5a.css';
import '../../css/t/t2h01ybvs.css';
import '../../css/j/jnnlegspg.css';
import '../../css/z/zy5wd1-0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="sjxjgyxar wm-shadow"/><path class="kkku0dawa"/><path class="zkutxob7u"/><path class="wbpg0kp5a"/><path class="t2h01ybvs"/><path class="jnnlegspg wm-shine"/><path class="wm-deco zy5wd1-0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:wand-sparkles"} {...others} />);
}

export default Component;
