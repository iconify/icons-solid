import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mknl414ue.css';
import '../../css/k/k18-gvbwt.css';
import '../../css/d/dwfl5yb9r.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mknl414ue"/><path class="k18-gvbwt"/><path class="dwfl5yb9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:default-outline"} {...others} />);
}

export default Component;
