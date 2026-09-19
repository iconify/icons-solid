import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/if4zyybqp.css';
import '../../css/k/kag6sfpgh.css';
import '../../css/n/nb181ei5f.css';
import '../../css/v/vlh_t3w3q.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="if4zyybqp"/><path class="kag6sfpgh"/><path class="nb181ei5f"/><path class="vlh_t3w3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:lock-open-1-outline"} {...others} />);
}

export default Component;
