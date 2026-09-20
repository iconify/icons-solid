import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/bcc-1qa8n.css';
import '../../css/z/z-7w8-4_v.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="bcc-1qa8n"/><path class="z-7w8-4_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:picnic-basket-3"} {...others} />);
}

export default Component;
