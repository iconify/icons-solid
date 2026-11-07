import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s0k-qebzz.css';
import '../../css/u/ugk0bzb-s.css';
import '../../css/k/ksod32btv.css';
import '../../css/x/xpw199b1a.css';
import '../../css/o/okv-1ab4t.css';
import '../../css/p/pm3t8d4ps.css';
import '../../css/p/p472ttwxz.css';
import '../../css/j/jhanyibir.css';
import '../../css/e/enfo96b9n.css';
import '../../css/x/xdj171b8t.css';
import '../../css/g/gkzpwmxcg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s0k-qebzz"/><path class="ugk0bzb-s"/><path class="ksod32btv"/><path class="xpw199b1a"/><path class="okv-1ab4t"/><path class="pm3t8d4ps"/><path class="p472ttwxz"/><path class="jhanyibir"/><path class="enfo96b9n"/><path class="xdj171b8t"/><path class="gkzpwmxcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bug-minimalistic-broken"} {...others} />);
}

export default Component;
