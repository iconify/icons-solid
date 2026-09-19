import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8ka7wbct.css';
import '../../css/r/rwx1unbvv.css';
import '../../css/t/tl7fndb1e.css';
import '../../css/q/qv-rl58jq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t8ka7wbct"/><path class="rwx1unbvv"/><path class="tl7fndb1e"/><path class="qv-rl58jq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:lowerleftpaintbrush"} {...others} />);
}

export default Component;
