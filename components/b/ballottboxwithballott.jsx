import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mb3tvpb7z.css';
import '../../css/w/wyc9-gbmh.css';
import '../../css/j/j0u755kff.css';
import '../../css/d/dry2-gzeo.css';
import '../../css/e/e9dd9npea.css';
import '../../css/s/si8aaswhc.css';
import '../../css/q/qes1xmb6h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mb3tvpb7z"/><path class="wyc9-gbmh"/><path class="j0u755kff"/><path class="dry2-gzeo"/><path class="e9dd9npea"/><path class="si8aaswhc"/><path class="qes1xmb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:ballottboxwithballott"} {...others} />);
}

export default Component;
