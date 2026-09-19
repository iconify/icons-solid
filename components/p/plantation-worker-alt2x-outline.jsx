import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lem80_bri.css';
import '../../css/e/e__bb0b3o.css';
import '../../css/g/g4__c4brb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lem80_bri"/><path class="e__bb0b3o"/><path clip-rule="evenodd" class="g4__c4brb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:plantation-worker-alt2x-outline"} {...others} />);
}

export default Component;
