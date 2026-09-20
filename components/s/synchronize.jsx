import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/hm_3lb1ra.css';
import '../../css/n/n0amwwi7o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="hm_3lb1ra"/><path class="n0amwwi7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:synchronize"} {...others} />);
}

export default Component;
