import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kezejccwp.css';
import '../../css/e/e0y0djbux.css';
import '../../css/l/lq9-82byw.css';
import '../../css/a/az7uel8kl.css';
import '../../css/g/gifke4byc.css';
import '../../css/l/ln79h-bxu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kezejccwp"/><path class="e0y0djbux"/><path class="lq9-82byw"/><path class="az7uel8kl"/><path class="gifke4byc"/><path class="ln79h-bxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bullhornwithsoundwaves"} {...others} />);
}

export default Component;
