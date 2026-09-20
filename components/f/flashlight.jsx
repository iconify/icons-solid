import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkm_kwoaq.css';
import '../../css/a/ae849gbxa.css';
import '../../css/n/nf4svcb2f.css';
import '../../css/e/ekpx_q0li.css';
import '../../css/i/ii_h42nfi.css';
import '../../css/n/nokm_idix.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/k/kalqnmbru.css';
import '../../css/v/v77dkk0ga.css';
import '../../css/h/hr-n8q-ih.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGuDgkSdQi" class="nkm_kwoaq"/></defs><use href="#SVGuDgkSdQi" class="ae849gbxa"/><path class="nf4svcb2f"/><path class="ekpx_q0li"/><path class="ii_h42nfi"/><path class="nokm_idix"/><g class="ij2x_72vy"><path class="kalqnmbru"/><path class="v77dkk0ga"/></g><use href="#SVGuDgkSdQi" class="hr-n8q-ih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flashlight"} {...others} />);
}

export default Component;
