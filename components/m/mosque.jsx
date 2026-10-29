import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/o5ipuobmj.css';
import '../../css/b/b685debfp.css';
import '../../css/z/z55ktmb7s.css';
import '../../css/v/vol_xunwy.css';
import '../../css/o/oxr1tvbet.css';
import '../../css/x/x3b7szb5l.css';
import '../../css/y/yajwnf9_y.css';
import '../../css/e/eq481hbfp.css';
import '../../css/y/yzmp70n_y.css';
import '../../css/a/aj1r45djd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="o5ipuobmj wm-shadow"/><path class="b685debfp"/><path class="z55ktmb7s"/><path class="vol_xunwy"/><path class="oxr1tvbet"/><path class="wm-shine x3b7szb5l"/><path class="wm-s yajwnf9_y"/><path class="eq481hbfp wm-s"/><path class="wm-s yzmp70n_y"/><path class="aj1r45djd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:mosque"} {...others} />);
}

export default Component;
