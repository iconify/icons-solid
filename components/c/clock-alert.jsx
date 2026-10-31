import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/rahj7z39f.css';
import '../../css/w/winu30slj.css';
import '../../css/k/kyc0gsb8z.css';
import '../../css/h/hmp16njeg.css';
import '../../css/n/nie1bykur.css';
import '../../css/j/j3l-vfqkm.css';
import '../../css/r/r_s6b48kb.css';
import '../../css/e/e4lnm5x7f.css';
import '../../css/a/aaboiypyw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="rahj7z39f"/><path class="winu30slj"/><path class="kyc0gsb8z wm-shine"/><path class="hmp16njeg wm-k"/><path class="nie1bykur wm-a"/><path class="j3l-vfqkm wm-s"/><path class="r_s6b48kb"/><path class="e4lnm5x7f"/><path class="aaboiypyw wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:clock-alert"} {...others} />);
}

export default Component;
