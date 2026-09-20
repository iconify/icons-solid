import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/y/yf_h25yie.css';
import '../../css/p/plw4ly3ms.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="yf_h25yie"/><path class="plw4ly3ms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:mobile-payment-done-2"} {...others} />);
}

export default Component;
