import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/mcot1-g5o.css';
import '../../css/v/v2br8ybzu.css';
import '../../css/n/nomf5gb1c.css';
import '../../css/j/joz3sw1tx.css';
import '../../css/e/e1rlsfb2n.css';
import '../../css/i/iyt3u5kfh.css';
import '../../css/v/vj8is_8kc.css';
import '../../css/w/wrpn7cc5f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="mcot1-g5o"/><path class="v2br8ybzu"/><path class="nomf5gb1c"/><path class="joz3sw1tx"/><path class="e1rlsfb2n"/><path class="iyt3u5kfh"/><path class="vj8is_8kc"/><path class="wrpn7cc5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ai-generate-variation-spark"} {...others} />);
}

export default Component;
