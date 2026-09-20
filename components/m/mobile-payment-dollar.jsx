import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/qqgjflb3z.css';
import '../../css/a/a_9et877l.css';
import '../../css/k/k5qf8o2ef.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="qqgjflb3z"/><path class="a_9et877l"/><path class="k5qf8o2ef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:mobile-payment-dollar"} {...others} />);
}

export default Component;
