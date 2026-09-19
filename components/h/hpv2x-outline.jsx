import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cvmkqsbso.css';
import '../../css/j/jzmvxfbwd.css';
import '../../css/k/kcitn8s2t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="cvmkqsbso"/><path clip-rule="evenodd" class="jzmvxfbwd"/><path clip-rule="evenodd" class="kcitn8s2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:hpv2x-outline"} {...others} />);
}

export default Component;
