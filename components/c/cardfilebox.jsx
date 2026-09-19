import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygrl_wc0y.css';
import '../../css/j/j0v773bhr.css';
import '../../css/d/dkef1-7ks.css';
import '../../css/n/neswouibg.css';
import '../../css/j/ji1vlo-0s.css';
import '../../css/e/ewrr21bec.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ygrl_wc0y"/><path class="j0v773bhr"/><path class="dkef1-7ks"/><path class="neswouibg"/><path class="ji1vlo-0s"/><path class="ewrr21bec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:cardfilebox"} {...others} />);
}

export default Component;
