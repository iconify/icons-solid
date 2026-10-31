import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/ww05vmbyr.css';
import '../../css/r/roskkpbzu.css';
import '../../css/r/rh6zo4tgp.css';
import '../../css/x/xwsw4tbre.css';
import '../../css/y/y4lea-m6w.css';
import '../../css/c/c-_6xtb5a.css';
import '../../css/u/u1kfli7yz.css';
import '../../css/m/mrap_nmll.css';
import '../../css/l/l392odvld.css';
import '../../css/k/k8n07hlgs.css';
import '../../css/n/npoqe6bbx.css';
import '../../css/t/tlypiu90t.css';
import '../../css/c/c_2fx1bnh.css';
import '../../css/g/gwankxbsf.css';
import '../../css/f/fuarghb2f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow ww05vmbyr"/><path class="roskkpbzu wm-k"/><path class="rh6zo4tgp wm-k"/><path class="wm-k xwsw4tbre"/><path class="wm-k y4lea-m6w"/><path class="c-_6xtb5a wm-k"/><path class="u1kfli7yz wm-shine"/><path class="mrap_nmll wm-k"/><path class="l392odvld wm-k"/><path class="k8n07hlgs wm-a"/><path class="npoqe6bbx wm-a"/><path class="tlypiu90t wm-a"/><path class="c_2fx1bnh wm-a"/><path class="gwankxbsf wm-a"/><path class="fuarghb2f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:shield-question"} {...others} />);
}

export default Component;
