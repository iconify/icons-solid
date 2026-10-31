import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t8uw6bcik.css';
import '../../css/o/oor_idbnh.css';
import '../../css/u/ukdjxpbvr.css';
import '../../css/q/qm0zc-2oy.css';
import '../../css/n/nuu5fsbos.css';
import '../../css/j/jbqddfbfm.css';
import '../../css/x/x8e04rbdb.css';
import '../../css/v/vw296bbgq.css';
import '../../css/i/iyt6nj9pk.css';
import '../../css/v/v8b7mfb6a.css';
import '../../css/x/xxy64kbqd.css';
import '../../css/b/begv_rbhi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t8uw6bcik wm-shadow"/><path class="oor_idbnh"/><path class="ukdjxpbvr"/><path class="qm0zc-2oy"/><path class="nuu5fsbos"/><path class="jbqddfbfm"/><path class="x8e04rbdb"/><path class="vw296bbgq"/><path class="iyt6nj9pk"/><path class="v8b7mfb6a"/><path class="wm-shine xxy64kbqd"/><path class="begv_rbhi wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:signal"} {...others} />);
}

export default Component;
