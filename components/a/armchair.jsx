import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud_k8j3_f.css';
import '../../css/d/dr_rp3bgz.css';
import '../../css/t/tso7djy_n.css';
import '../../css/f/fxv9itbqm.css';
import '../../css/u/u8j0dcb7j.css';
import '../../css/x/x_siebbhy.css';
import '../../css/r/rmvec8vrn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ud_k8j3_f wm-shadow"/><path class="dr_rp3bgz wm-k"/><path class="tso7djy_n wm-k"/><path class="fxv9itbqm wm-k"/><path class="u8j0dcb7j wm-k"/><path class="wm-k x_siebbhy"/><path class="rmvec8vrn wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:armchair"} {...others} />);
}

export default Component;
