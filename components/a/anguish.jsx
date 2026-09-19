import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkh622bdk.css';
import '../../css/d/dr_tp8gfx.css';
import '../../css/a/a_5gsrz8s.css';
import '../../css/i/ioebbhbja.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nkh622bdk"/><path class="dr_tp8gfx"/><path class="a_5gsrz8s"/><path class="ioebbhbja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:anguish"} {...others} />);
}

export default Component;
