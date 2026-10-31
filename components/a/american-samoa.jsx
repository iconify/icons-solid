import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0j9osb_d.css';
import '../../css/x/x-h1zgbbo.css';
import '../../css/w/w3us3mbpf.css';
import '../../css/d/dghqgsc0p.css';
import '../../css/h/hv1mujwqb.css';
import '../../css/v/v6c_9j-dg.css';
import '../../css/d/d_19uonib.css';
import '../../css/h/hv2b7-1ve.css';
import '../../css/p/p4-ov3eak.css';
import '../../css/y/ybqds1ysj.css';
import '../../css/m/mqbbmogdn.css';
import '../../css/b/bmnikbmyb.css';
import '../../css/n/n7grmec-f.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="f0j9osb_d"/><path class="x-h1zgbbo"/><path class="w3us3mbpf"/><path class="dghqgsc0p"/><path class="hv1mujwqb"/><path class="v6c_9j-dg"/><path class="d_19uonib"/><path class="hv2b7-1ve"/><path class="p4-ov3eak"/><path class="ybqds1ysj"/><path class="mqbbmogdn"/><path class="bmnikbmyb"/><path class="n7grmec-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:american-samoa"} {...others} />);
}

export default Component;
