import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3-11qh_t.css';
import '../../css/n/n4sr4wbmj.css';
import '../../css/x/x265ujlqs.css';
import '../../css/w/w_yrnebzp.css';
import '../../css/h/hne0j1rlx.css';
import '../../css/s/s7e-72b8r.css';
import '../../css/i/i2hyxbb-y.css';
import '../../css/e/e0guse_ht.css';
import '../../css/w/whjulua6d.css';
import '../../css/u/u86004bkb.css';
import '../../css/n/n2hlg7k7l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w3-11qh_t wm-shadow"/><path class="n4sr4wbmj wm-k"/><path class="wm-k x265ujlqs"/><path class="w_yrnebzp wm-k"/><path class="hne0j1rlx wm-k"/><path class="s7e-72b8r wm-k"/><path class="i2hyxbb-y wm-shine"/><path class="e0guse_ht wm-a"/><path class="whjulua6d wm-a"/><path class="u86004bkb wm-s"/><path class="n2hlg7k7l wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:flag-off"} {...others} />);
}

export default Component;
