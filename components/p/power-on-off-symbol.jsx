import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmsr3kb1i.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/n/n2p5-ed3s.css';
import '../../css/m/mt5816bop.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fmsr3kb1i"/><g class="brzn_0bpr"><path class="n2p5-ed3s"/><path class="mt5816bop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:power-on-off-symbol"} {...others} />);
}

export default Component;
