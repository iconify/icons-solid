import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsq6mja4f.css';
import '../../css/w/wh62wewfn.css';
import '../../css/o/os4umr7_t.css';
import '../../css/q/qdneupq0k.css';
import '../../css/n/nmvo4b0kl.css';
import '../../css/t/tqxtygepq.css';
import '../../css/c/ct3j8bcko.css';
import '../../css/x/x124bhbzh.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGAqWRbc2i"><path class="hsq6mja4f"/></clipPath></defs><g clip-path="url(#SVGAqWRbc2i)" transform="translate(-100)scale(.6024)"><path class="wh62wewfn"/><g class="os4umr7_t"><path class="qdneupq0k"/><path class="nmvo4b0kl"/></g><g class="tqxtygepq"><path class="ct3j8bcko"/><path class="x124bhbzh"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ax-1x1"} {...others} />);
}

export default Component;
