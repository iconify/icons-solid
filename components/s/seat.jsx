import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvhlot_su.css';
import '../../css/z/zzboz8bkr.css';
import '../../css/q/qir125p1g.css';
import '../../css/e/e53arwbrt.css';
import '../../css/l/ls3pf9fxa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uvhlot_su"/><path class="zzboz8bkr"/><path class="qir125p1g"/><path class="e53arwbrt"/><path class="ls3pf9fxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:seat"} {...others} />);
}

export default Component;
