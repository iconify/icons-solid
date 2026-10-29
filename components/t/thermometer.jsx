import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/po2x_0bfm.css';
import '../../css/f/fq0awubrh.css';
import '../../css/r/rck7zv95c.css';
import '../../css/a/ad3brppbn.css';
import '../../css/j/jeyz4bb_u.css';
import '../../css/h/hdug3ab2a.css';
import '../../css/v/vbz2itbrc.css';
import '../../css/f/fl8jxl2uy.css';
import '../../css/x/x2jlv43eo.css';
import '../../css/c/c56k_0b4u.css';
import '../../css/v/vwo2hrg8g.css';
import '../../css/a/anprdob_t.css';
import '../../css/b/buaabi_mn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="po2x_0bfm wm-shadow"/><path class="fq0awubrh wm-k"/><path class="rck7zv95c wm-k"/><path class="ad3brppbn wm-k"/><path class="jeyz4bb_u wm-k"/><path class="hdug3ab2a wm-k"/><path class="vbz2itbrc wm-shine"/><path class="fl8jxl2uy wm-k"/><path class="wm-k x2jlv43eo"/><path class="c56k_0b4u wm-k"/><path class="vwo2hrg8g wm-k"/><path class="anprdob_t wm-k"/><path class="buaabi_mn wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:thermometer"} {...others} />);
}

export default Component;
