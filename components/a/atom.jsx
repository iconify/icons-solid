import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jln8vgbfz.css';
import '../../css/z/zm8hc5b_q.css';
import '../../css/d/d_7_73box.css';
import '../../css/w/wic8jcc4d.css';
import '../../css/p/ptv_6wc4c.css';
import '../../css/c/cs_ox6cey.css';
import '../../css/f/fssm9sbhb.css';
import '../../css/z/zy5wd1-0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jln8vgbfz wm-shadow"/><path class="zm8hc5b_q"/><path class="d_7_73box"/><path class="wic8jcc4d"/><path class="ptv_6wc4c"/><path class="cs_ox6cey"/><path class="fssm9sbhb wm-shine"/><path class="wm-deco zy5wd1-0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:atom"} {...others} />);
}

export default Component;
