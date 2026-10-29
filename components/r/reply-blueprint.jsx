import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nat81jbfq.css';
import '../../css/o/oqxweacyl.css';
import '../../css/l/l12sk0-nd.css';
import '../../css/k/kfe9-3bvk.css';
import '../../css/n/ntrpu2kes.css';
import '../../css/y/ym8flzbsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="nat81jbfq wm-deco"/><path class="oqxweacyl wm-deco"/><path class="l12sk0-nd wm-k"/><path class="kfe9-3bvk wm-a"/><path class="ntrpu2kes wm-k"/><path class="wm-a ym8flzbsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:reply-blueprint"} {...others} />);
}

export default Component;
