import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/f/fb3tv3bfw.css';
import '../../css/o/o3gfejbmt.css';
import '../../css/m/ma9v-ebqy.css';
import '../../css/t/tpuugf0vy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="fb3tv3bfw"/><path class="o3gfejbmt"/><path class="ma9v-ebqy"/><path class="tpuugf0vy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:switch-button"} {...others} />);
}

export default Component;
