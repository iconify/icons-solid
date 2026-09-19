import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/ww3yploev.css';
import '../../css/k/k3l1q-biz.css';
import '../../css/l/li6ifibis.css';
import '../../css/q/q5ne23bvp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ww3yploev"/><path class="k3l1q-biz"/><path class="li6ifibis"/><path class="q5ne23bvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:switch"} {...others} />);
}

export default Component;
