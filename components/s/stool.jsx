import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/a/a5q5blbqa.css';
import '../../css/o/oi5knwboq.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="a5q5blbqa"/><path class="oi5knwboq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:stool"} {...others} />);
}

export default Component;
