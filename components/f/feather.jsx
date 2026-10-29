import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j024eqbpr.css';
import '../../css/d/dtqqksb4r.css';
import '../../css/i/iqz-kib2v.css';
import '../../css/k/k7v4vc50n.css';
import '../../css/r/rtqaqvb-h.css';
import '../../css/o/ov7aeeb2g.css';
import '../../css/n/n4qqo--dw.css';
import '../../css/m/mz_nutb2z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j024eqbpr wm-shadow"/><path class="dtqqksb4r wm-k"/><path class="iqz-kib2v wm-k"/><path class="k7v4vc50n wm-k"/><path class="rtqaqvb-h wm-k"/><path class="ov7aeeb2g wm-k"/><path class="n4qqo--dw wm-shine"/><path class="mz_nutb2z wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:feather"} {...others} />);
}

export default Component;
