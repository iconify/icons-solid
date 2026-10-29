import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/iyhv73bmx.css';
import '../../css/h/htrzo4bbc.css';
import '../../css/k/kgc8bjiig.css';
import '../../css/a/adjhhdrbs.css';
import '../../css/a/a8zyt0c_g.css';
import '../../css/j/jg0olma2o.css';
import '../../css/z/zy5wd1-0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="iyhv73bmx wm-shadow"/><path class="htrzo4bbc"/><path class="kgc8bjiig"/><path class="adjhhdrbs"/><path class="a8zyt0c_g"/><path class="jg0olma2o"/><path class="wm-deco zy5wd1-0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:scale"} {...others} />);
}

export default Component;
