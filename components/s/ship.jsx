import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qetnckbkp.css';
import '../../css/r/r6tjo0kod.css';
import '../../css/t/t4ape9b0e.css';
import '../../css/r/rgjv2g3ac.css';
import '../../css/i/ib5qy2uli.css';
import '../../css/y/yt8-bkbdk.css';
import '../../css/s/si9dxe_gy.css';
import '../../css/u/uqvbob--x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qetnckbkp"/><path class="r6tjo0kod"/><path class="t4ape9b0e"/><path class="rgjv2g3ac"/><path class="ib5qy2uli"/><path class="yt8-bkbdk"/><circle class="si9dxe_gy"/><path class="uqvbob--x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:ship"} {...others} />);
}

export default Component;
