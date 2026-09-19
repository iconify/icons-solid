import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/w9z9w7vpq.css';
import '../../css/k/kgom2wzjp.css';
import '../../css/k/kq30l5gks.css';
import '../../css/x/xk412fbxm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="h01tyzbfu"><path class="w9z9w7vpq"/><path class="kgom2wzjp"/><path class="kq30l5gks"/><path class="xk412fbxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:high-speed-rail"} {...others} />);
}

export default Component;
