import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k7ad9ebts.css';
import '../../css/u/uz2874bdj.css';
import '../../css/r/rm1uezbht.css';
import '../../css/z/zhrtbxbsw.css';
import '../../css/g/g4n1ixbuw.css';
import '../../css/a/aun-51bwf.css';
import '../../css/l/l011dwbmv.css';
import '../../css/s/skw9d75am.css';
import '../../css/o/oiap-cc6a.css';
import '../../css/x/xtf7c-8ov.css';
import '../../css/v/vyavd-_hg.css';
import '../../css/c/cfqgmi0di.css';
import '../../css/q/qxee_acec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k7ad9ebts wm-shadow"/><path class="uz2874bdj wm-a"/><path class="rm1uezbht wm-a"/><path class="wm-a zhrtbxbsw"/><path class="g4n1ixbuw wm-a"/><path class="aun-51bwf wm-a"/><path class="l011dwbmv wm-shine"/><path class="skw9d75am wm-k"/><path class="oiap-cc6a wm-k"/><path class="wm-k xtf7c-8ov"/><path class="vyavd-_hg wm-k"/><path class="cfqgmi0di wm-k"/><path class="qxee_acec wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-gothic:arrow-left-to-line"} {...others} />);
}

export default Component;
