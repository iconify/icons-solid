import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/tatc_ib4h.css';
import '../../css/e/e5ez0gb3n.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="tatc_ib4h"/><path class="e5ez0gb3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:karaoke"} {...others} />);
}

export default Component;
