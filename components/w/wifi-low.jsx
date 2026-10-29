import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/au-080b8x.css';
import '../../css/d/dzo-iiqfn.css';
import '../../css/j/jyaw3sb5k.css';
import '../../css/o/o168c9b_w.css';
import '../../css/s/sp8zcybad.css';
import '../../css/j/jj_tw7bjc.css';
import '../../css/a/aiz-qkbcc.css';
import '../../css/a/akvr8ibym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="au-080b8x wm-shadow"/><path class="dzo-iiqfn"/><path class="jyaw3sb5k"/><path class="o168c9b_w"/><path class="sp8zcybad"/><path class="jj_tw7bjc"/><path class="aiz-qkbcc"/><path class="akvr8ibym wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:wifi-low"} {...others} />);
}

export default Component;
