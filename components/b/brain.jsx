import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/ky9s8j_lj.css';
import '../../css/m/m_2b5m5bz.css';
import '../../css/y/yf88pr0jd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="h01tyzbfu"><path class="ky9s8j_lj"/><path clip-rule="evenodd" class="m_2b5m5bz"/><path class="yf88pr0jd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:brain"} {...others} />);
}

export default Component;
