import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wcnucbpfj.css';
import '../../css/d/dgc3gi4qg.css';
import '../../css/g/g4ae1acyy.css';
import '../../css/z/zw8k6dbua.css';
import '../../css/p/pwj2adc6m.css';
import '../../css/j/jonz-3bvz.css';
import '../../css/o/o85bd1mmu.css';
import '../../css/n/nh-5657cd.css';
import '../../css/o/o7gkqac0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wcnucbpfj wm-shadow"/><path class="dgc3gi4qg wm-shadow"/><path class="g4ae1acyy"/><path class="zw8k6dbua"/><path class="pwj2adc6m"/><path class="jonz-3bvz"/><path class="o85bd1mmu wm-shine"/><path class="nh-5657cd wm-shine"/><path class="o7gkqac0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:chart-line"} {...others} />);
}

export default Component;
