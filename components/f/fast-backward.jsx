import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/k/k77fwmbzl.css';
import '../../css/s/sk995nd_w.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="k77fwmbzl"/><path class="sk995nd_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:fast-backward"} {...others} />);
}

export default Component;
