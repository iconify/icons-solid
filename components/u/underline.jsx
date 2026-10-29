import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpuglft3y.css';
import '../../css/j/jags6ynbp.css';
import '../../css/z/zguafbcxu.css';
import '../../css/w/wyntw7bml.css';
import '../../css/y/y59n4x8uk.css';
import '../../css/g/gy5wmi-5t.css';
import '../../css/f/fzi8ugb2j.css';
import '../../css/g/golni-bnx.css';
import '../../css/w/w0v0q7jud.css';
import '../../css/e/ejkbj3ttl.css';
import '../../css/t/tuy_i23_m.css';
import '../../css/g/gd96nmlzv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tpuglft3y wm-shadow"/><path class="jags6ynbp wm-k"/><path class="wm-k zguafbcxu"/><path class="wm-k wyntw7bml"/><path class="wm-k y59n4x8uk"/><path class="gy5wmi-5t wm-shine"/><path class="fzi8ugb2j wm-k"/><path class="golni-bnx wm-a"/><path class="w0v0q7jud wm-a"/><path class="ejkbj3ttl wm-a"/><path class="tuy_i23_m wm-a"/><path class="gd96nmlzv wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:underline"} {...others} />);
}

export default Component;
