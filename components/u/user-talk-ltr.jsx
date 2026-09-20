import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8_m0n41d.css';
import '../../css/h/h7o1n1z4d.css';
import '../../css/k/k79q3xboj.css';
import '../../css/r/r5d2n_xgw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t8_m0n41d"/><path class="h7o1n1z4d"/><circle class="k79q3xboj"/><circle class="r5d2n_xgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:user-talk-ltr"} {...others} />);
}

export default Component;
