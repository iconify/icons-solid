import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g_dim4ogz.css';
import '../../css/q/quv6ix7kg.css';
import '../../css/s/s7zm_42kt.css';
import '../../css/t/tn0uqua-i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="g_dim4ogz"/><rect class="quv6ix7kg"/><path class="s7zm_42kt"/><circle class="tn0uqua-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:master"} {...others} />);
}

export default Component;
