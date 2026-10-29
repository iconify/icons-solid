import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/n2ketnbze.css';
import '../../css/j/jvgq-q_6s.css';
import '../../css/f/f-_v4caqp.css';
import '../../css/j/jzl9c0b3v.css';
import '../../css/x/xkgm5acpp.css';
import '../../css/a/a_5-7jiyo.css';
import '../../css/d/dafglku_s.css';
import '../../css/r/rzniexvqv.css';
import '../../css/x/x68b7obap.css';
import '../../css/d/dz-w9_b8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="n2ketnbze wm-shadow"/><path class="jvgq-q_6s"/><path class="f-_v4caqp"/><path class="jzl9c0b3v"/><path class="xkgm5acpp"/><path class="a_5-7jiyo"/><path class="dafglku_s wm-shine"/><path class="rzniexvqv wm-shine"/><path class="wm-deco x68b7obap"/><path class="dz-w9_b8f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:avatar-woman-hijab"} {...others} />);
}

export default Component;
