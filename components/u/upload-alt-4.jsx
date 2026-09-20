import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/co_24tbna.css';
import '../../css/k/kfc4fib_o.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="co_24tbna"/><path class="kfc4fib_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:upload-alt-4"} {...others} />);
}

export default Component;
