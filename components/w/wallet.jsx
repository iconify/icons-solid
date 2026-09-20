import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/c0sioac0q.css';
import '../../css/l/lqp2b9btq.css';
import '../../css/l/lh2z7ynqy.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="c0sioac0q"/><path class="lqp2b9btq"/><path class="lh2z7ynqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:wallet"} {...others} />);
}

export default Component;
