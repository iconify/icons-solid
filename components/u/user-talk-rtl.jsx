import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxymrbctt.css';
import '../../css/d/d-svt8bha.css';
import '../../css/k/k79q3xboj.css';
import '../../css/r/r5d2n_xgw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fxymrbctt"/><path class="d-svt8bha"/><circle class="k79q3xboj"/><circle class="r5d2n_xgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:user-talk-rtl"} {...others} />);
}

export default Component;
