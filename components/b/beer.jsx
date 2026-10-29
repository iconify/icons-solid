import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihycitbgt.css';
import '../../css/x/x9rxembuf.css';
import '../../css/b/bprmqhbrz.css';
import '../../css/w/w_6lf80mg.css';
import '../../css/b/bkw1vvxam.css';
import '../../css/b/bwa74oodk.css';
import '../../css/a/a81oagbyn.css';
import '../../css/c/c_zzdebrq.css';
import '../../css/s/s-w64vb1t.css';
import '../../css/w/w4j-auw8d.css';
import '../../css/q/q4imhtxmd.css';
import '../../css/l/ln_a559dk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ihycitbgt wm-shadow"/><path class="wm-k x9rxembuf"/><path class="bprmqhbrz wm-k"/><path class="w_6lf80mg wm-k"/><path class="bkw1vvxam wm-k"/><path class="bwa74oodk wm-k"/><path class="a81oagbyn wm-shine"/><path class="c_zzdebrq wm-k"/><path class="s-w64vb1t wm-k"/><path class="w4j-auw8d wm-k"/><path class="q4imhtxmd wm-a"/><path class="ln_a559dk wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:beer"} {...others} />);
}

export default Component;
