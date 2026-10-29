import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tm0znoyoq.css';
import '../../css/z/zpywszb1q.css';
import '../../css/o/onwguecpi.css';
import '../../css/x/xf0-hjhbp.css';
import '../../css/s/sdq4ojbjr.css';
import '../../css/t/t3-ksrxhi.css';
import '../../css/a/adauyib_t.css';
import '../../css/q/qa0c9mn5r.css';
import '../../css/b/bp-6mq1bh.css';
import '../../css/w/w_9r52gdm.css';
import '../../css/w/w1nxu2b2k.css';
import '../../css/r/rf_audqja.css';
import '../../css/f/f4sr1jbmk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tm0znoyoq wm-shadow"/><path class="wm-a zpywszb1q"/><path class="onwguecpi wm-a"/><path class="wm-a xf0-hjhbp"/><path class="sdq4ojbjr wm-a"/><path class="t3-ksrxhi wm-a"/><path class="adauyib_t wm-a"/><path class="qa0c9mn5r wm-k"/><path class="bp-6mq1bh wm-k"/><path class="w_9r52gdm wm-k"/><path class="w1nxu2b2k wm-k"/><path class="rf_audqja wm-shine"/><path class="f4sr1jbmk wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:chevrons-up"} {...others} />);
}

export default Component;
