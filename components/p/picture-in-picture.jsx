import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3-ztrb0q.css';
import '../../css/p/pvl_96b5o.css';
import '../../css/w/w3f7t8tyc.css';
import '../../css/g/g_lzv-b4w.css';
import '../../css/l/lk9zayt8b.css';
import '../../css/f/flp4kz42r.css';
import '../../css/j/j85bz1b7u.css';
import '../../css/d/dpyd_ccmm.css';
import '../../css/h/hxekncbvg.css';
import '../../css/p/ppsdg06fu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u3-ztrb0q wm-shadow"/><path class="pvl_96b5o wm-k"/><path class="w3f7t8tyc wm-k"/><path class="g_lzv-b4w wm-k"/><path class="lk9zayt8b wm-k"/><path class="flp4kz42r wm-k"/><path class="j85bz1b7u wm-shine"/><path class="dpyd_ccmm wm-k"/><path class="hxekncbvg wm-k"/><path class="ppsdg06fu wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:picture-in-picture"} {...others} />);
}

export default Component;
