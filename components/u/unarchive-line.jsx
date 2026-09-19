import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3xwghbbt.css';
import '../../css/e/e9kh_hcnc.css';
import '../../css/p/ppiitbcbm.css';
import '../../css/k/kmp_q18cm.css';
import '../../css/q/q_zg1k_eb.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 g3xwghbbt"/><path class="clr-i-outline clr-i-outline-path-2 e9kh_hcnc"/><path class="clr-i-outline clr-i-outline-path-3 ppiitbcbm"/><path class="clr-i-outline clr-i-outline-path-4 kmp_q18cm"/><path class="clr-i-outline clr-i-outline-path-5 q_zg1k_eb"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:unarchive-line"} {...others} />);
}

export default Component;
