import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cay9w4bva.css';
import '../../css/a/ad3u9_-bp.css';
import '../../css/a/ahgurpb-c.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cay9w4bva"/><path class="ad3u9_-bp"/><path class="ahgurpb-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:speaker-high"} {...others} />);
}

export default Component;
