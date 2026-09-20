import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j_gf21bvo.css';
import '../../css/g/g2if8wbjy.css';
import '../../css/q/q7xbp4b8r.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="j_gf21bvo"/><circle class="g2if8wbjy"/><circle class="q7xbp4b8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shopping-cart-1-shopping-cart-checkout"} {...others} />);
}

export default Component;
