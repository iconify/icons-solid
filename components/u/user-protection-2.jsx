import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h59qhmbic.css';
import '../../css/i/ig8qghvay.css';
import '../../css/x/xwm29_bdq.css';
import '../../css/f/fz46-cb9e.css';
import '../../css/a/ak_5w2ghk.css';
import '../../css/o/orfa7uvbw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="h59qhmbic"/><path class="ig8qghvay"/><path class="xwm29_bdq"/><path class="fz46-cb9e"/><path class="ak_5w2ghk"/><path class="orfa7uvbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:user-protection-2"} {...others} />);
}

export default Component;
