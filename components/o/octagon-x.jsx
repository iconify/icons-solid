import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/acnxwcifq.css';
import '../../css/i/ir73rrbjo.css';
import '../../css/y/y_sdzkqdm.css';
import '../../css/i/iznhfbbvo.css';
import '../../css/b/bev6orbva.css';
import '../../css/y/y12kq-2_a.css';
import '../../css/r/rux4smbij.css';
import '../../css/s/so881cbep.css';
import '../../css/r/rwbmr2b1n.css';
import '../../css/s/sj0jlln8b.css';
import '../../css/p/pi52tqi0o.css';
import '../../css/s/sdowh5b5a.css';
import '../../css/m/mcmk67vng.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="acnxwcifq wm-shadow"/><path class="ir73rrbjo wm-k"/><path class="wm-k y_sdzkqdm"/><path class="iznhfbbvo wm-k"/><path class="bev6orbva wm-k"/><path class="wm-k y12kq-2_a"/><path class="rux4smbij wm-shine"/><path class="so881cbep wm-a"/><path class="rwbmr2b1n wm-a"/><path class="sj0jlln8b wm-a"/><path class="pi52tqi0o wm-a"/><path class="sdowh5b5a wm-a"/><path class="mcmk67vng wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:octagon-x"} {...others} />);
}

export default Component;
