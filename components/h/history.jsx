import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzi9xib3x.css';
import '../../css/x/x1devibdj.css';
import '../../css/u/urobxwbxz.css';
import '../../css/h/hsl0ssb_i.css';
import '../../css/s/sokfnh_xu.css';
import '../../css/l/l5-wbh2wa.css';
import '../../css/b/bhigg-b2e.css';
import '../../css/l/lb7zjjxaw.css';
import '../../css/k/kwc642bvx.css';
import '../../css/l/l1p5wbgkv.css';
import '../../css/e/e5achb3rx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jzi9xib3x wm-shadow"/><path class="wm-k x1devibdj"/><path class="urobxwbxz wm-k"/><path class="hsl0ssb_i wm-k"/><path class="sokfnh_xu wm-k"/><path class="l5-wbh2wa wm-k"/><path class="bhigg-b2e wm-k"/><path class="lb7zjjxaw wm-k"/><path class="kwc642bvx wm-k"/><path class="l1p5wbgkv wm-k"/><path class="e5achb3rx wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:history"} {...others} />);
}

export default Component;
