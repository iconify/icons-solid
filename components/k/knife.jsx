import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/chuykx04i.css';
import '../../css/h/hmd7vzbzg.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="chuykx04i"/><path class="hmd7vzbzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:knife"} {...others} />);
}

export default Component;
