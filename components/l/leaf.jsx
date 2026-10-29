import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7i01pb-e.css';
import '../../css/i/ix4tsiy3g.css';
import '../../css/e/e2f7xnbtd.css';
import '../../css/w/wi7s7lbqj.css';
import '../../css/b/bkpnpsbwd.css';
import '../../css/e/eq9azrbiz.css';
import '../../css/w/wr9xm2bum.css';
import '../../css/r/r5b38hb2b.css';
import '../../css/u/u9w2ozb0r.css';
import '../../css/l/l_wf_3bup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d7i01pb-e wm-shadow"/><path class="ix4tsiy3g wm-shadow"/><path class="e2f7xnbtd"/><path class="wi7s7lbqj"/><path class="bkpnpsbwd"/><path class="eq9azrbiz"/><path class="wm-shine wr9xm2bum"/><path class="r5b38hb2b"/><path class="u9w2ozb0r"/><path class="l_wf_3bup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:leaf"} {...others} />);
}

export default Component;
