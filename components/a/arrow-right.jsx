import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahyq4wl8m.css';
import '../../css/q/qcejygbio.css';
import '../../css/r/r09tyouxv.css';
import '../../css/b/bc-9-9bvz.css';
import '../../css/n/n10dtibhi.css';
import '../../css/d/dbh7dooqm.css';
import '../../css/h/hwgg4ibdi.css';
import '../../css/s/s2bjs1bis.css';
import '../../css/i/ieffw5bqc.css';
import '../../css/v/vpuqt2bqh.css';
import '../../css/l/ldl7uhbhl.css';
import '../../css/w/w445nfdni.css';
import '../../css/x/xi9j4o53q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ahyq4wl8m wm-shadow"/><path class="qcejygbio wm-k"/><path class="r09tyouxv wm-k"/><path class="bc-9-9bvz wm-k"/><path class="n10dtibhi wm-k"/><path class="dbh7dooqm wm-shine"/><path class="hwgg4ibdi wm-k"/><path class="s2bjs1bis wm-a"/><path class="ieffw5bqc wm-a"/><path class="vpuqt2bqh wm-a"/><path class="ldl7uhbhl wm-a"/><path class="w445nfdni wm-a"/><path class="wm-a xi9j4o53q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:arrow-right"} {...others} />);
}

export default Component;
