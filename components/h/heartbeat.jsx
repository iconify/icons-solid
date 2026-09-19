import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xhkw50bnm.css';
import '../../css/a/aqxo_qbvg.css';
import '../../css/p/pmhy0ibjl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="xhkw50bnm"/><path class="aqxo_qbvg"/><path class="pmhy0ibjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:heartbeat"} {...others} />);
}

export default Component;
