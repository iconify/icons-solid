import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ps30wpfqo.css';
import '../../css/r/rbz4r4bhi.css';
import '../../css/x/xj_syzbmh.css';
import '../../css/j/jn9ozkb6n.css';
import '../../css/z/zpfff4b3t.css';
import '../../css/n/nn1n67juw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ps30wpfqo"/><path class="rbz4r4bhi"/><path class="xj_syzbmh"/><path class="jn9ozkb6n"/><path class="zpfff4b3t"/><path class="nn1n67juw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:worried"} {...others} />);
}

export default Component;
