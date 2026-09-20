import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/c892716ue.css';
import '../../css/q/q1wo1tufo.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="c892716ue"/><path class="q1wo1tufo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:bracket-2"} {...others} />);
}

export default Component;
