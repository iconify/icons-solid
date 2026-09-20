import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/ss9mow7ak.css';
import '../../css/t/tn2sh5bsg.css';
import '../../css/x/xd6cdabmp.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="ss9mow7ak"/><path class="tn2sh5bsg"/><path class="xd6cdabmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:music-disable"} {...others} />);
}

export default Component;
