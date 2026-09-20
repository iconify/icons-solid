import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/igo3-bc7k.css';
import '../../css/d/dszcvgboc.css';
import '../../css/x/x-n4o_but.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="igo3-bc7k"/><path class="dszcvgboc"/><path class="x-n4o_but"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:helicopter"} {...others} />);
}

export default Component;
