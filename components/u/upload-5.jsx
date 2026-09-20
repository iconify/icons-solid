import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/n/na7t21bzw.css';
import '../../css/f/f6tewlb-e.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="na7t21bzw"/><path class="f6tewlb-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:upload-5"} {...others} />);
}

export default Component;
