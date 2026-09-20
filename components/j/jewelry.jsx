import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/a/aiqem_btf.css';
import '../../css/k/kyn4k26ws.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="aiqem_btf"/><path class="kyn4k26ws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:jewelry"} {...others} />);
}

export default Component;
