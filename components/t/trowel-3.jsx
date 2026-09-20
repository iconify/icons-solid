import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/i1twmrkez.css';
import '../../css/q/q9c1qpbly.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="i1twmrkez"/><path class="q9c1qpbly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:trowel-3"} {...others} />);
}

export default Component;
