import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2yr9ub6y.css';
import '../../css/w/wh62wewfn.css';
import '../../css/o/os4umr7_t.css';
import '../../css/q/qdneupq0k.css';
import '../../css/n/nmvo4b0kl.css';
import '../../css/t/tqxtygepq.css';
import '../../css/c/ct3j8bcko.css';
import '../../css/x/x124bhbzh.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGSKklEcPm"><path class="f2yr9ub6y"/></clipPath></defs><g clip-path="url(#SVGSKklEcPm)" transform="matrix(.56472 0 0 .56482 -60 -.1)"><path class="wh62wewfn"/><g class="os4umr7_t"><path class="qdneupq0k"/><path class="nmvo4b0kl"/></g><g class="tqxtygepq"><path class="ct3j8bcko"/><path class="x124bhbzh"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ax-4x3"} {...others} />);
}

export default Component;
