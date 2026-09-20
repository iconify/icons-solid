import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/h7xptodjo.css';
import '../../css/z/zyf1iby3w.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="h7xptodjo"/><path class="zyf1iby3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:curve-arrow-right-3"} {...others} />);
}

export default Component;
