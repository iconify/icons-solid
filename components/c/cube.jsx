import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/fl7fp-b9g.css';
import '../../css/j/j7w_2ev7z.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="fl7fp-b9g"/><path class="j7w_2ev7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:cube"} {...others} />);
}

export default Component;
