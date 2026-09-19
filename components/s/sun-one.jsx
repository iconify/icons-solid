import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yhp-5kuob.css';
import '../../css/o/og834z-aj.css';
import '../../css/p/pduw7o0gn.css';
import '../../css/d/dknv_achv.css';
import '../../css/t/t4_734xkv.css';
import '../../css/x/xjo_14bxa.css';
import '../../css/o/olpf-g4om.css';
import '../../css/i/izqed-r0x.css';
import '../../css/o/oyoczccgy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yhp-5kuob"/><path class="og834z-aj"/><path class="pduw7o0gn"/><path class="dknv_achv"/><path class="t4_734xkv"/><path class="xjo_14bxa"/><path class="olpf-g4om"/><path class="izqed-r0x"/><path class="oyoczccgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sun-one"} {...others} />);
}

export default Component;
