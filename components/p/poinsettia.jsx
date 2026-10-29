import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hg8-qabsq.css';
import '../../css/c/c5z3ed4xx.css';
import '../../css/e/ea6bl9qau.css';
import '../../css/n/nwau7sbyu.css';
import '../../css/b/b6ed9fbfx.css';
import '../../css/y/y9-0gzb5s.css';
import '../../css/i/irahmccuc.css';
import '../../css/j/j5bw7mbms.css';
import '../../css/e/e5qrtsbtx.css';
import '../../css/f/fomeu4b0k.css';
import '../../css/u/uii07gb3r.css';
import '../../css/d/dk6wz8btx.css';
import '../../css/k/k_a92kbaq.css';
import '../../css/e/e-x0p-bpk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hg8-qabsq wm-shadow"/><path class="c5z3ed4xx wm-k"/><path class="ea6bl9qau wm-k"/><path class="nwau7sbyu wm-k"/><path class="b6ed9fbfx wm-k"/><path class="wm-shine y9-0gzb5s"/><path class="irahmccuc wm-k"/><path class="j5bw7mbms wm-a"/><path class="e5qrtsbtx wm-s"/><path class="fomeu4b0k wm-s"/><path class="uii07gb3r wm-s"/><path class="dk6wz8btx wm-s"/><path class="k_a92kbaq wm-s"/><path class="e-x0p-bpk wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:poinsettia"} {...others} />);
}

export default Component;
