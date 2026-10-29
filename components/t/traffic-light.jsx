import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uau-c_bud.css';
import '../../css/o/ockymkb5l.css';
import '../../css/s/s_3e12b3p.css';
import '../../css/r/rx-8cvb6h.css';
import '../../css/f/f0l4hh1ku.css';
import '../../css/x/x769q74cl.css';
import '../../css/n/n8jbrmg0m.css';
import '../../css/u/ugzk7cc3x.css';
import '../../css/w/wjcuk2src.css';
import '../../css/i/idu_edblh.css';
import '../../css/k/k3go2-biu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uau-c_bud wm-shadow"/><path class="ockymkb5l wm-k"/><path class="s_3e12b3p wm-k"/><path class="rx-8cvb6h wm-k"/><path class="f0l4hh1ku wm-k"/><path class="wm-k x769q74cl"/><path class="n8jbrmg0m wm-shine"/><path class="ugzk7cc3x wm-k"/><path class="wjcuk2src wm-k"/><path class="idu_edblh wm-k"/><path class="k3go2-biu wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:traffic-light"} {...others} />);
}

export default Component;
