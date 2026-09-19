import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/shy8ozb9z.css';
import '../../css/w/w9pyzggoa.css';
import '../../css/z/zzwk1tb0c.css';
import '../../css/o/ou996nbqg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="shy8ozb9z"/><path clip-rule="evenodd" class="w9pyzggoa"/><path clip-rule="evenodd" class="zzwk1tb0c"/><path clip-rule="evenodd" class="ou996nbqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:water-treatment"} {...others} />);
}

export default Component;
