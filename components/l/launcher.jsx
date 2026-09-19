import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7sr6ubzr.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/es8s3misz.css';
import '../../css/w/wbb2lrotm.css';
import '../../css/k/kxm-kubys.css';
import '../../css/y/yxijvacxi.css';
import '../../css/r/ra8f6bbem.css';
import '../../css/m/m2r-bkbek.css';
import '../../css/q/q7ixdybso.css';
import '../../css/c/cl5y2yqqe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i7sr6ubzr"/><g class="d2kvgvbvc"><path class="es8s3misz"/><path class="wbb2lrotm"/><path class="kxm-kubys"/><path class="yxijvacxi"/><path class="ra8f6bbem"/><path class="m2r-bkbek"/><path class="q7ixdybso"/><path class="cl5y2yqqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:launcher"} {...others} />);
}

export default Component;
