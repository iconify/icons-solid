import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nklnajbgw.css';
import '../../css/q/qoykf60jf.css';
import '../../css/p/pr_rujhye.css';
import '../../css/v/vsg8htbbm.css';
import '../../css/o/o-aht3fxd.css';
import '../../css/v/vv22jxbvp.css';
import '../../css/o/o03h_cche.css';
import '../../css/w/wcj97ebms.css';
import '../../css/d/du5nu5m0c.css';
import '../../css/s/s8b_h5g-r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nklnajbgw wm-k"/><path class="qoykf60jf wm-a"/><path class="pr_rujhye wm-deco"/><path class="vsg8htbbm wm-k"/><path class="o-aht3fxd wm-k"/><path class="vv22jxbvp wm-a"/><path class="o03h_cche wm-shadow"/><path class="wcj97ebms wm-shine"/><path class="du5nu5m0c wm-shine"/><path class="s8b_h5g-r wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:clipboard-list"} {...others} />);
}

export default Component;
