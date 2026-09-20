import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/syvs5h-jc.css';
import '../../css/j/ji0ebbb0r.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="syvs5h-jc"/><path class="ji0ebbb0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:vest-2"} {...others} />);
}

export default Component;
